import '../styles/main.css';
import {Link} from 'react-router-dom';
import Logo from '../logos/monogramme.svg'
import LogoCart from '../logos/cart.png';


function Navbar() {
  return (
    <div className="w-full fixed inline-flex justify-between items-center" style={{height: "10%"}} >
      <Link to="/">
        <img className="h-12 pl-4 cursor-default hover:opacity-0" src={Logo} alt="monogramme" />
      </Link>
      <Link to="/cart">
        <img className="h-12 pr-4 cursor-default hover:opacity-0" src={LogoCart} alt="panier" />
      </Link>
    </div>
  );
}

export default Navbar;
