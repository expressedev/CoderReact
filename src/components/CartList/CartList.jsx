import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import '../CartList/CartList.css'


const CartList = () => {

    const { cartList, totalBuy, removeItem, emptyCart } = useContext(CartContext)

    return (
        <div className="container">
            <div className="row mt-4 justify-content-center text-center" >
                <div className="col-lg-3 col-sm-3"></div>

                <div className="col-lg-1 col-sm-1"></div>
            </div>
            <hr></hr>
            <div className="row justify-content-center text-center" >
                {cartList.map(prod => 
                    <div className="row align-items-center" key={prod.id}>
                        <div className="col-lg-3 col-sm-3">
                            <img src={prod.imagen} style={{width:150}}></img>
                        </div>
                        <div className="col-lg-3 col-sm-3">
                            <h5 style={{color:'#ffffff'}}><b>{prod.producto}</b></h5>
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <h5 style={{color:'#ffffff'}}>${prod.precio}</h5>
                        </div>
                        <div className="col-lg-1 col-sm-1">
                            <h5 style={{color:'#ffffff'}}>{prod.quantity}</h5>
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <h5 style={{color:'#ffffff'}}>${prod.quantity * prod.precio}</h5>
                        </div>
                        <div className="col-lg-1 col-sm-1">
                            <button className="btn btn-warning bg-gradient" style={{color:'#ffffff'}} onClick={() => removeItem(prod.id)}><b>Eliminar</b></button>
                        </div>
                        <hr></hr>
                    </div>
                )}
                <h5 style={{color:'#ffffff'}}>Total: <b>${totalBuy()}</b></h5>
                
                <div className="d-flex justify-content-center mt-5" style={{padding:'1rem'}}>
                    <button className="btn btn-warning bg-gradient me-3" style={{color:'#ffffff'}} onClick={emptyCart}><b>Vaciar</b></button>
                    <Link to="/checkout">
                        <button className="btn btn-warning bg-gradient ms-3" style={{color:'#ffffff'}}><b>Finalizar la Compra</b></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartList
