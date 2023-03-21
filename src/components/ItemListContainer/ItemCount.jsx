import React, {useState} from 'react'

function ItemCount({initial, max, onAdd}) {

    const [value, setValue] = useState(initial)

    const btnPlus = () => {
        if (value < max) {
            setValue(value + 1);
        } 
    }

    const btnMinus = () => {
        if (value > initial)  {
            setValue(value - 1)
        }
    }
    
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center" style={{padding:'0'}}>
                <button onClick={btnMinus} className="btn btn-warning" style={{paddingLeft:'1.5rem', paddingRight:'1.5rem', fontSize:'20px', color: '#ffffff'}}><b>-</b></button>
                <h3 className="m-2">{value}</h3>
                <button onClick={btnPlus} className="btn btn-warning" style={{paddingLeft:'1.5rem', paddingRight:'1.5rem', fontSize:'20px', color: '#ffffff'}}><b>+</b></button>
            </div>
            <div className="d-flex justify-content-center" style={{paddingBottom: '1rem'}}>
                <button onClick={()=> onAdd(value)} className="btn btn-warning bg-gradient mt-2" style={{paddingLeft:'1rem', paddingRight:'1.2rem', paddingTop:'0.5rem', paddingBottom:'0.5rem', color: '#ffffff'}}><b>Añadir al Carro</b></button>
            </div>
        </div>
    )
}

export default ItemCount
