import { useDispatch } from 'react-redux';
import { getMovie } from '../actions/movie';
import { movies } from '../actions/movies';
import { useEffect } from 'react';

// const Movies = ({moviez}) => {
function Movies({moviez}){
    const dispatch = useDispatch();
    const Mo = (movie) =>{
        let element = document.getElementById("wrapper");
        element.classList.toggle("toggled");
        dispatch(getMovie(movie));
    }
    
    useEffect( ()=>{
        dispatch(movies('fast and furious'));
        
    });
    return (
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
    );
}
 
export default Movies;