import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <small>Made by <Link to="./">me!</Link></small>
        </footer>
    );
}

export default Footer;