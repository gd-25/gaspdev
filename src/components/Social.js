import '../styles/main.css';
import Ig from '../logos/ig.png';
import Mail from '../logos/mail.png';
import Li from '../logos/li.png';
import { Link } from 'react-router-dom';


function Cart() {
  return (
    <div className="flex flex-row justify-center items-center">
          <Link to="https://www.instagram.com/ga5parov/" className="cursor-default hover:opacity-0">
            <img id="ig" src={Ig}
              alt="instagram profile" className="h-6 mx-1" />
          </Link>
          <Link to="https://www.linkedin.com/in/gasparddeshusses/" className="cursor-default hover:opacity-0">
            <img id="li" src={Li}
              alt="linkedin profile" className="h-6 mx-1" />
          </Link>
          <Link to="mailto:gasparddeshusses@gmail.com" className="cursor-default hover:opacity-0">
            <img id="mail" src={Mail} alt="email"
              className="h-6 mx-1" />
          </Link>
        </div>
  );
}

export default Cart;
