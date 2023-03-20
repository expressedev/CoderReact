import { useState, useContext } from 'react'
import { getFirestore, collection, writeBatch, addDoc, Timestamp, doc} from 'firebase/firestore'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'

const FormBuyer = () => {

    const [orderId, setOrderId] = useState('')
    const [creatingOrder, setCreatingOrder] = useState(false)
    const [formData, setFormData] = useState({
        name:"", email:"", emailConfirm:"", phone:""
    })
    const { cartList, totalBuy, emptyCart } = useContext(CartContext)


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value   
        })
    }


    const createOrder = (e) => {
        e.preventDefault();
        setCreatingOrder(true)
        delete formData.emailConfirm
        let order = {}
        order.date = Timestamp.fromDate(new Date())
        order.buyer = formData
        order.total = totalBuy()
        
        order.productos = cartList.map(cartItem => {
            const id = cartItem.id
            const producto = cartItem.producto
            const precio = cartItem.precio
            const quantity = cartItem.quantity
            const totalPrice = cartItem.precio * cartItem.quantity
            return {id, producto, precio, quantity, totalPrice}
        })


        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then(resp => setOrderId(resp.id))
        .catch(err => console.log(err))
        .finally(() => { 
            setCreatingOrder(false)
            updateStock()
            emptyCart()
            setFormData({
                name:"", email:"", emailConfirm:"", phone:""
            })
        })

        function updateStock() {
            const batch = writeBatch(db)

            order.productos.map(el => {
                let updateDoc = doc(db, 'productos', el.id)
                let currentStock = cartList.find(item => item.id === el.id).stock

                batch.update( updateDoc, {
                    stock: currentStock - el.quantity
                })
            })

            batch.commit()
        }
    }

    return (
        <> 
            {creatingOrder
            ?
                <>      
                    <h4 className="mt-5 text-center">Estamos procesando su orden...</h4>
                    <Loader />
                </>
            :
            orderId
            ? 
                <div className="container">
                    <div className="py-5 text-center mt-4">
                        <h2 className="mt-4">Gracias por tu compra</h2>
                        <h4 className="my-4">La compra se fue exitosa.</h4>
                        <strong>El ID es {orderId}</strong><br />
                        <Link className="btn btn-warning bg-gradient mt-4" to={`/`}>
                            <strong>Inicio</strong>
                        </Link>
                    </div>
                </div>
            :
                <div className="container mt-5 form__container d-flex">
                    <div className="container align-self-center position-relative">
                        <div className="row">
                            <div className="col-12">
                                <form className="d-flex flex-column"
                                    onSubmit={createOrder}
                                    onChange={handleChange}
                                >
                                    <div className="mb-3 d-flex flex-column align-items-center">
                                        <label className="form-label"><b>Nombre</b></label>
                                        <input type="name" className="form-control form-control--color" name="name" placeholder="Nombre" defaultValue={formData.name} required />
                                    </div>
                                    <div className="mb-3 d-flex flex-column align-items-center">
                                        <label className="form-label"><b>Celular</b></label>
                                        <input type="number" className="form-control form-control--color" name="phone" placeholder="Celular" defaultValue={formData.phone} required />
                                    </div>
                                    <div className="mb-3 d-flex flex-column align-items-center">
                                        <label className="form-label"><b>E-mail</b></label>
                                        <input type="email" className="form-control form-control--color" name="email" placeholder="Email" defaultValue={formData.email} required />
                                    </div>
                                    <div className="mb-3 d-flex flex-column align-items-center">
                                        <label className="form-label"><b>Confirmar E-mail</b></label>
                                        <input type="email" className="form-control form-control--color" name="emailConfirm" placeholder="Confirmar Email" defaultValue={formData.emailConfirm} required />
                                    </div>
                                    <button className="btn btn-warning bg-gradient d-flex justify-content-center w-50 align-self-center" 
                                        disabled={!formData.name || !formData.phone || !formData.email || formData.email !== formData.emailConfirm || cartList.length == 0}><b>Comprar</b>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default FormBuyer
