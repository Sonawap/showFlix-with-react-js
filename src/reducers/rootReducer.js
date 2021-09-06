// import axios  from 'axios';

const initState = {
    moviezs:[],
    movie: {},
}


// const rootReducer = (state = initState, action) => {
//     return state;
    
// }

///REDUCER
const rootReducer = (state = initState, action) =>{
    switch(action.type){
        case "MOVIES":

            return {
                ...state,
                moviezs: action.getMovies
            }

        case "MOVIE":
            
            return {
                ...state,
                movie: action.getMovie
            }
            break;
            // state.movie = action.gMovie
        default:
            return state;
        // break;
    }
}
 
export default rootReducer;