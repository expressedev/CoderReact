import { Link, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from '../../assets/img/logoSinFondo.png'
import CartWidget from '../Cart/CartWidget'
import '../Cart/Cart.css'

const NavBar = ({cartCount}) => {
	return (
        <>
            <Navbar bg="light" expand="lg" style={{padding:'0',}}>
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <img
                                src={logo}
                                width="150px"
                                className="d-inline-block align-top"
                                alt="Nuts"
                                style={{padding:'0'}}
                            />
                        </Navbar.Brand>
                    </Link>
                    <Link className="cart-mobile" style={{paddingRight:'2rem'}} to="/cart">
                        <CartWidget cartCount={cartCount} />
                    </Link> 
                    <Navbar.Toggle bg="light" expand="lg" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="align-items-center">
                            <NavLink color= "red" className="nav-link" to="/" style={{fontSize:'18px'}}>
                                Inicio
                            </NavLink>
                            <NavLink className="nav-link" to="/categoria/rojos" style={{fontSize:'18px'}}>
                                Frutos Rojos
                            </NavLink>
                            <NavLink className="nav-link" to="/categoria/secos" style={{fontSize:'18px'}}>
                                Frutos Secos
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Link className="cart-desktop" to="/cart">
                        <CartWidget cartCount={cartCount} />
                    </Link> 
                </Container>
            </Navbar>
        </>
	);
};

export default NavBar;
