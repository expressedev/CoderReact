import React, {useContext} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext/CartContext";
import Badge from 'react-bootstrap/Badge';

function CartWidget() {
    const { cartList, cartCounter } = useContext(CartContext)

    return (
        <>
            <FaShoppingCart size="2.5rem" color="#f7c94a" className="position-relative" /> 
            {cartList.length === 0 
            ?
                <span></span>
            :
                <Badge pill bg="danger">{cartCounter()}</Badge>}
        </>
    )
}

export default CartWidget;
