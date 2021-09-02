
import arrowLogo from '../assets/img/Back Arrow.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const MovieAbout = ({toggle}) => {
  const movie = useSelector(state => state.movie);

    return (
        <div id="sidebar-wrapper">
            <div className="logo-wrap">
                <img src={arrowLogo} onClick={toggle} alt="Movie title" id="menu-toggle2" />
            </div>
            <div className="movie-list mt-5">
                <div className="movie-side">
                <img src={movie.Poster} alt={movie.Title} className="side-img" />
                </div>
            </div>
            <h4 className="movie-title">{movie.Title}</h4>
            <h4 className="movie-text mt-5">{movie.Plot}</h4>
            <Link to={`/movie/${movie.imdbID}`} className="watchBtn">
                Watch
            </Link>
        </div>
    );
}
 
export default MovieAbout;