import searchLogo2 from '../assets/img/Search2.svg';
import searchLogo3 from '../assets/img/Search3.svg';
import Movies from './movie-list';
import { useState } from 'react';
import { movies } from '../actions/movies';
import axios from 'axios';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const Main = ({toggle}) => {
    const dispatch = useDispatch();
    const [sWord, setValue] = useState('mortal kombat');
    const [moviez, setMovies] = useState([]);
    const handleChange = (e) => {
        // alert("ok")
        setValue(e.target.value); 
        axios.get('https://www.omdbapi.com/', {params:{'apiKey': 'bdbf7fa8', 's':sWord}}).then((response) =>{
            setMovies(response.data.Search);
            dispatch(movies(response.data.Search));
        });
    }
    useEffect( ()=>{
        axios.get('https://www.omdbapi.com/', {params:{'apiKey': 'bdbf7fa8', 's':sWord}}).then((response) =>{
            setMovies(response.data.Search);
            dispatch(movies(response.data.Search));
        });
    }, [dispatch, sWord]);
    return (
        <div className="main-wrapper">
            <h4>Explore</h4>
            <div className="search-wrapper">
                <div className="search-box">
                    <div className="search-container">
                    <div className="search-img">
                        <img src={searchLogo2} alt="showflix search logo" className="searchImg" />
                    </div>
                    <div className="search-field">
                        <input type="text" value={sWord} onChange={handleChange} className="form-field" placeholder="Search" onKeyUp={handleChange}/>
                    </div>
                </div>
            </div>
            <div className="search-button">
                <button className="searchBtn">
                Search
                </button>
                <button className="searchBtn2">
                <img src={searchLogo3} alt="showflix search logo" className="searchImg" />
                </button>
            </div>
        </div>
        <div className="movie-wrapper">
            <div className="searchtitle">
                <span className="searchResult">Results for:</span>  <span className="searchResultTitle">{sWord}</span>
            </div>
            <Movies toggle={toggle} moviez = {moviez} sWord={sWord}/>
            </div>
        </div>
        
    );
}

 
export default Main;