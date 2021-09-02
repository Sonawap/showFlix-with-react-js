import { Link } from 'react-router-dom';
import heartLogo from '../assets/img/Heart.svg';
import logo from '../assets/img/Logo.svg';
import searchLogo from '../assets/img/Search.svg';
const Nav = () => {
    return (
        <div className="side">
            <div className="logo-wrap">
                <Link to="/">
                    <img src={logo} alt="showFlix Logo" className="center" />
                </Link>
            </div>
            <ul>
                <li className="active">
                    <Link to="/">
                        <div className="list-item center">
                            <span className="list-logo active">
                                    <img src={searchLogo} alt="showflix search logo" className="list-img" />
                            </span>
                            <span>Search</span>
                        </div>
                    </Link>
                </li>
                <li>
                <div className="list-item center">
                    <span className="list-logo">
                      <img src={heartLogo} alt="Showflix wishlist logo" className="list-img" />
                    </span>
                    <span>Watchlist</span>
                </div>
              </li>
            </ul>
        </div>
    );
}
 
export default Nav;