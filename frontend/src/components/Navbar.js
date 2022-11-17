import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <img src={logo} alt="gratitude-journal-logo" />
        </Link>
      </div>

      <div>
        <ul>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/logout">Log out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
