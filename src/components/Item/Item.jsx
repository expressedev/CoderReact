import {Link} from "react-router-dom";
import './Item.css'

function Item({prod}) {
	return (
		<div className='col-md-4'>
            <div className="card mt-5">
                <img src={prod.imagen} className="card-img-top card-img-products" alt={prod.producto}/>
                <div className="card-body text-center">
                    <h5 className="card-title">{prod.producto}</h5>
                    <h6 className="card-text" style = {{color: '#f6e0a1 '}}>${prod.precio}</h6>
                </div>
                <div className="card-footer text-center" id="footer">
                    <Link to={`/detalle/${prod.id}`}>
                        <button className="btn btn-warning t" id="button">Info</button>
                    </Link>
                </div>
            </div>
		</div>
	);
}

export default Item;
