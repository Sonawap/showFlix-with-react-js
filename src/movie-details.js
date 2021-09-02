import movieAvatar from './assets/img/Normal Radius.png';
import timeLogo from './assets/img/Time.svg';
import starLogo from './assets/img/Star.svg';
import playLogo from './assets/img/Play.svg';
import unionLogo from './assets/img/Union.svg';
import Movies from './components/movie-list';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { movie } from './actions/movie';
import { useEffect } from 'react';

const MovieDetails = () => {
    const {id} = useParams()
    const moviez = useSelector(state => state.moviezs);
    const movieO = useSelector(state => state.movie);
    const toggle = (id) => {
        console.log(id)
        let element = document.getElementById("wrapper");
        element.classList.toggle("toggled");
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movie(id));
    }, []);
    return (
        <div className="main-wrapper">
            
            <div className="row no-gutters">
                <div className="col-md-3">
                    <img src={movieO.Poster} alt="movie avatar" className="view-movie-img" width="100%" height="400px" />
                </div>
                {/* <button onClick={() => dispatch(movie())}>Show</button> */}
                <div className="col-md-6 view-movie-details">
                    <h1 className="view-movie-head">{movieO.Title}</h1>
                    <h4 className="view-movie-text">
                        {movieO.Plot}
                    </h4>
                    <div className="row no-gutters mt-2">
                        <div className="col-sm-6 col-lg-4">
                            <span>
                                <img src={timeLogo} alt="showFlix Time Logo" width="15" />
                            </span>
                            <span className="movie-de">{movieO.Released}</span>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <span>
                                <img src={starLogo} alt="showFlix Play Logo" width="15" />
                            </span>
                            <span className="movie-de"> {movieO.imdbRating}</span>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <span>
                                <img src={playLogo} alt="showFlix Play Logo" width="13" />
                            </span>
                            <span className="movie-de"> {movieO.Runtime}</span>
                        </div>
                    </div>

                    <div className="btn-con">
                        <div className="btn-watch">
                            <button className="watchBtn2">
                                Watch
                            </button>
                        </div>

                        <div className="btn-wish">
                            <button className="watchBtn3">
                                <img src={unionLogo} alt="showFlix wishlist Logo"  width="20" />
                            </button>
                        </div>

                        <div className="btn-watch2"></div>
                    </div>
                </div>
            </div>

            <div className="movie-wrapper">
                <div className="searchtitle">
                    <h1>Similar Movies</h1>
                </div>
                <Movies toggle={toggle} moviez = {moviez}/>
            </div>
        </div>
    );
}
 
export default MovieDetails;