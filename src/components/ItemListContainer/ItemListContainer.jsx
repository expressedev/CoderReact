import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader'
import banner from './../../assets/img/banner.jpg'
import '../ItemListContainer/banner.css'

function ItemListContainer({greeting}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    useEffect(() => {
        const db = getFirestore();
        if (idCategory) {
            const queryCollectionCategory = query(collection(db, 'productos'), where('category', '==', idCategory) )
            getDocs(queryCollectionCategory)
            .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            .finally(() => setLoading(false))
        } else {
            const queryCollection = collection(db, 'productos')
            getDocs(queryCollection)
            .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            .finally(() => setLoading(false))
        }  
    }, [idCategory])

    return (
        <div>
            {/* <h2 className="text-center"> {greeting} </h2> */}
            <Link to="/">
            <img src={banner} className="img-fluid "></img>
            </Link>
            <div className="container">
                <div className="row">
                    { loading 
                    ? 
                        <Loader />
                    :
                        <ItemList products={products}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer
