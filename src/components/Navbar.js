import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav>
            <h1>Ignac Borovy</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact me</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;