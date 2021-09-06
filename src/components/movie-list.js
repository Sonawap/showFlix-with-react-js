import { useDispatch } from 'react-redux';
import { getMovie } from '../actions/movie';
import axios from 'axios';


// const Movies = ({moviez}) => {
function Movies({moviez}){
    const dispatch = useDispatch();
    const Mo = (movie) =>{
        let element = document.getElementById("wrapper");
        element.classList.toggle("toggled");
        axios.get('https://www.omdbapi.com/', {params:{'apiKey': 'bdbf7fa8', 'i': movie.imdbID}}).then((response) =>{
            dispatch(getMovie(response.data));
        });
        
    }

    const wmovies = moviez ? (
        <div className="movie-container">
            {moviez.map((movie) => (
                <div className="movie-list">
                    <div className="movie" style={{ 
                        backgroundImage : `url(${movie.Poster})`
                    }} key={movie.imdbID}>
                        <button className="movie-btn" type="submit" id="menu-toggle" onClick={() => {Mo(movie)}}>View</button>
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <div>No Movies avalibale</div>
    )
 
    return (
        <div>{ wmovies }</div>
    );
}
 
export default Movies;