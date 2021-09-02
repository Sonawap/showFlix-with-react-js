const Movies = ({toggle, moviez}) => {
    return (
        <div className="movie-container">
            {moviez.map((movie) => (
                <div className="movie-list">
                    <div className="movie" style={{ 
                        backgroundImage : `url(${movie.Poster})`
                     }} key={movie.imdbID}>
                        <button className="movie-btn" type="submit" id="menu-toggle" onClick={() => {toggle(movie.imdbID)}}>View</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Movies;