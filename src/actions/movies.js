export const movies = (getMovies) => {
    return {
        type: 'MOVIES',
        getMovies
    };
}