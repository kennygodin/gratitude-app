import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>GratitudeApp</h1>
      </Link>
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
  );
};

export default Navbar;
