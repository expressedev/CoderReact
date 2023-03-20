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
                    <div className="row text-center justify-content-center">
                        <h3 className="my-5"><strong>Oops, no hay ningun producto.</strong></h3>
                        <h4 className="my-5">Agrega productos!</h4>
                        <Link className="btn btn-warning bg-gradient w-25" to="/">
                            Comprar
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
