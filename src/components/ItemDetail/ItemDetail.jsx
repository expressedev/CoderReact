import React, {useState, useContext} from 'react'
import {Link} from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';
import ItemCount from '../ItemListContainer/ItemCount'
import './ItemDetail.css'

function ItemDetail({product}) {

    const [goToCart, setGoToCart] = useState(false)

    const { addToCart } = useContext(CartContext)

    // Agregar al carrito
    const onAdd = (quantity) => {
        setGoToCart(true)
        addToCart({...product, quantity: quantity})
    }

    return (
        <div key={product.id} className="container mt-5">
            <div className="row justify-content-center text-center align-items-center">
                <div className="col-lg-5 col-md-12 col-sm-12 pb-5">  
                    <img src={product.imagen} className="itemDetail-img"></img>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <h2 className="fw-bold" style={{color: '#ffffff'}}>{product.producto}</h2>
                    <h3 style={{color: '#f6e0a1'}}>${product.precio}</h3>
                    <p style={{color: '#ffffff'}}>{product.descripcion}</p>
                    <h6 style={{color: '#ffffff'}}>Stock: {product.stock}</h6>

                    {!goToCart 
                    ? 
                        <ItemCount initial={1} max={product.stock} onAdd={onAdd} /> 
                    : 
                        <div className="d-flex justify-content-center" style={{padding: '1rem'}}>
                            <Link to={`/cart`}> 
                                <button className="btn btn-warning bg-gradient me-2 mt-2" style={{color: '#ffffff', fontWeight: '900',}}>Ir al carrito</button>
                            </Link>
                            <Link to={`/`}> 
                                <button className="btn btn-warning bg-gradient ms-2 mt-2" style={{color: '#ffffff', fontWeight: '900',}}>Continuar la compra</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
