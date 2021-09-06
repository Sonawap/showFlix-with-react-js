import axios  from 'axios';

const initState = {
    moviezs: [],
    movie: {},
}


// const rootReducer = (state = initState, action) => {
//     return state;
    
// }

///REDUCER
const rootReducer = (state = initState, action) =>{
    switch(action.type){
        case "MOVIES":
            axios.get('https://www.omdbapi.com/', {params:{'apiKey': 'bdbf7fa8', 's': action.sWord}}).then((response) =>{
                let getMovies = response.data.Search
                return {
                    ...state,
                    moviezs: getMovies
                }
            });
            break

        case "MOVIE":
            axios.get('https://www.omdbapi.com/', {params:{'apiKey': 'bdbf7fa8', 'i': action.gMovie.imdbID}}).then((response) =>{
                let getMovie = response.data;
                return {
                    ...state,
                    movie: getMovie
                }
            });
            break;
            // state.movie = action.gMovie
        default:
            return state;
        // break;
    }
}
 
export default rootReducer;