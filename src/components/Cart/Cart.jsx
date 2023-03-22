import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import CartList from '../CartList/CartList'


function Cart() {

    const { cartList } = useContext(CartContext)

    return (
        <>

            {cartList.length === 0
            ? 
                <div className="container mt-5">
                    <div className="row text-center justify-content-center" style={{padding:'1rem',}}>
                        <h3 className="my-5" style={{color: '#ffffff'}}><b>Oops, no hay ningun producto en tu carrito.</b></h3>
                        <h4 className="my-5" style={{color: '#ffffff'}}>Agrega productos!</h4>
                        <Link className="btn btn-warning bg-gradient w-25" to="/" style={{color: '#ffffff', fontSize:'20px'}}>
                            <b>Comprar</b>
                        </Link>
                    </div>
                </div>
            :
                <CartList />
            }
        </>
    )
}

export default Cart
