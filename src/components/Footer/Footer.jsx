
import logo from './../../assets/img/logoSinFondo.png'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer container-fluid mt-5 bg-light">
                <div className="row">
                    <div className="col-12 d-flex flex-column align-items-center mt-2">
                        <Link to="/"><img src={logo} alt="nuts emporitum" className="footer__logo" /></Link>
                    </div>
                </div>
                
                
            </footer>
        </>
    )
}

export default Footer
