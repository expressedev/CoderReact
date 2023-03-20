import React, {useState} from 'react'

function ItemCount({initial, max, onAdd}) {

    const [value, setValue] = useState(initial)

    // Sumar, no permite pasar las unidades de stock
    const btnPlus = () => {
        if (value < max) {
            setValue(value + 1);
        } 
    }

    // Restar, no permite llegar a 0 unidades
    const btnMinus = () => {
        if (value > initial)  {
            setValue(value - 1)
        }
    }
    
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={btnMinus} className="btn btn-warning">-</button>
                <h3 className="m-2">{value}</h3>
                <button onClick={btnPlus} className="btn btn-warning">+</button>
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={()=> onAdd(value)} className="btn btn-warning bg-gradient mt-2">Añadir al Carro</button>
            </div>
        </div>
    )
}

export default ItemCount
