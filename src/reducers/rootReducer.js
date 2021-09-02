import axios  from 'axios';

const initState = {
    moviezs:[
        {"Title":"Mortal Kombat","Year":"2021","imdbID":"tt0293429","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BY2ZlNWIxODMtN2YwZi00ZjNmLWIyN2UtZTFkYmZkNDQyNTAyXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"},
        {"Title":"Mortal Kombat","Year":"1995","imdbID":"tt0113855","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjY5NTEzZGItMGY3My00NzE4LThkYTUtYjJkNzk3MDBiMWE3XkEyXkFqcGdeQXVyNzg5MDE1MDk@._V1_SX300.jpg"},
        {"Title":"Mortal Kombat: Annihilation","Year":"1997","imdbID":"tt0119707","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYjdmZTU3MWMtZTU4ZC00NjYzLTk1NzAtODc2ZDY0ZWNhYWEzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
        {"Title":"Mortal Kombat Legends: Scorpion's Revenge","Year":"2020","imdbID":"tt9580138","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_SX300.jpg"},
        {"Title":"Mortal Kombat","Year":"2011–2013","imdbID":"tt1842127","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMjgzYzI5NWItNDA2ZC00MmJmLWE0NDctOTM1ZDE4NGMzZjM1XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"},
        {"Title":"Mortal Kombat: Rebirth","Year":"2010","imdbID":"tt1672087","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYTExMjBmYzItY2EyMC00NjMyLWJlYTEtYmI4NmQ3MTE2MzZmXkEyXkFqcGdeQXVyNjQ1NzAwODk@._V1_SX300.jpg"},
        {"Title":"Mortal Kombat: Conquest","Year":"1998–1999","imdbID":"tt0170982","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMTc1MDU3ODk1NV5BMl5BanBnXkFtZTcwMjY4ODQyMQ@@._V1_SX300.jpg"},
        {"Title":"Mortal Kombat","Year":"2011","imdbID":"tt1386939","Type":"game","Poster":"https://m.media-amazon.com/images/M/MV5BMzcyODBjM2ItYzhlOS00NDZkLWIyYTAtNTM1NDUyZWJiOWRkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"},
        {"Title":"Mortal Kombat X","Year":"2015","imdbID":"tt3772796","Type":"game","Poster":"https://m.media-amazon.com/images/M/MV5BYzk3NWMzZDAtMzEzNS00M2RjLTk5Y2QtYzE0NWE0NjdjMjY1XkEyXkFqcGdeQXVyOTU1NjkyODE@._V1_SX300.jpg"},
        {"Title":"Mortal Kombat","Year":"1992","imdbID":"tt0203701","Type":"game","Poster":"https://m.media-amazon.com/images/M/MV5BMDkyMWYxMDctY2ZjZC00YTBhLWE0YTctNTM5OTQ3M2VmN2M0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"}
    ],

    movie: 
    {"Title":"Guardians of the Galaxy Vol. 2","Year":"2017","Rated":"PG-13","Released":"05 May 2017","Runtime":"136 min","Genre":"Action, Adventure, Comedy","Director":"James Gunn","Writer":"James Gunn, Dan Abnett, Andy Lanning","Actors":"Chris Pratt, Zoe Saldana, Dave Bautista","Plot":"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 15 wins & 58 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"67/100"}],"Metascore":"67","imdbRating":"7.6","imdbVotes":"600,709","imdbID":"tt3896198","Type":"movie","DVD":"10 Jul 2017","BoxOffice":"$389,813,101","Production":"Marvel Studios, Walt Disney Pictures","Website":"N/A","Response":"True"}
}


// const rootReducer = (state = initState, action) => {
//     return state;
    
// }

///REDUCER
const rootReducer = (state = initState, action) =>{
    switch(action.type){
        case "MOVIES":
            axios.get('https://www.omdbapi.com/', {params:{'apiKey': 'bdbf7fa8', 's': 'mortal kombat'}}).then((response) =>{
            return state.moviezs = response.data
            });
        case "MOVIE":
            axios.get('https://www.omdbapi.com/', {params:{'apiKey': 'bdbf7fa8', 'i': 'tt3896198'}}).then((response) =>{
                state.movie = response.data;
                console.log(state.movie)
                return state;
            });
        default:
            return state;
        // break;
    }
}
 
export default rootReducer;