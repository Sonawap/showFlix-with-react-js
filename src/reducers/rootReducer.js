import axios  from 'axios';

const initState = {
    moviezs: [
        {
          "Title": "The Fast and the Furious",
          "Year": "2001",
          "imdbID": "tt0232500",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
          "Title": "The Fast and the Furious: Tokyo Drift",
          "Year": "2006",
          "imdbID": "tt0463985",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
        },
        {
          "Title": "The Fast and the Furious",
          "Year": "1954",
          "imdbID": "tt0046969",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZmI3YmNhNzktOTMzNC00ODg4LTk3YmQtMGI2ZGQzNzcwZmRkXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg"
        },
        {
          "Title": "Fast and Furious",
          "Year": "1939",
          "imdbID": "tt0031298",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjAyNTQ1NjA3Ml5BMl5BanBnXkFtZTgwOTIyNjIxMzE@._V1_SX300.jpg"
        },
        {
          "Title": "Fast and the Furious: Tokyo Drift - The Japanese Way",
          "Year": "2006",
          "imdbID": "tt0878117",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
        },
        {
          "Title": "Fast and Furious 6: The Game",
          "Year": "2013",
          "imdbID": "tt4106374",
          "Type": "game",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNGFiNjYzOTQtMzAyYS00OTUwLWIxMGUtZGQ5NjI2YjgzMGJmXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg"
        },
        {
          "Title": "Fast and Furious Crossroads",
          "Year": "2020",
          "imdbID": "tt11468188",
          "Type": "game",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZjc4NjBmMDMtNmQ4MS00MGRhLWI2YTgtYTEwNjZiZGMyNDViXkEyXkFqcGdeQXVyNzQzNDM3NTI@._V1_SX300.jpg"
        },
        {
          "Title": "Jackie Chan: Fast, Funny and Furious",
          "Year": "2002",
          "imdbID": "tt0454613",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNjkxNTU2MjYtMWQ0Mi00MDUyLTkyOGMtMWIyMDg1ZDRmMjhjXkEyXkFqcGdeQXVyNTMyODM3MTg@._V1_SX300.jpg"
        },
        {
          "Title": "Tasmanian Devil: The Fast and Furious Life of Errol Flynn",
          "Year": "2007",
          "imdbID": "tt1008725",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZjFjYTQxNWUtNTQ5Yy00ZjA3LTllMTYtM2UxYjM3MGNkM2NhXkEyXkFqcGdeQXVyNzQzNTcwMTU@._V1_SX300.jpg"
        },
        {
          "Title": "The Fast and the Furious",
          "Year": "2006",
          "imdbID": "tt2353948",
          "Type": "game",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYWIyZTE1YjctYzRlNy00MTllLWEzZDUtMzMyMzgyODc2Mjg2XkEyXkFqcGdeQXVyNjc3NTE3NTM@._V1_SX300.jpg"
        }
      ],
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
                // console.log(response.data.Search)
                // const s = response.data.Search;
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