import searchLogo2 from '../assets/img/Search2.svg';
import searchLogo3 from '../assets/img/Search3.svg';
import Movies from './movie-list';

const Main = ({toggle, moviez}) => {
    
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
                        <input type="text" className="form-field" placeholder="Search" />
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
                <span className="searchResult">Results for:</span>  <span className="searchResultTitle">Mortal Kombat</span>
            </div>
            <Movies toggle={toggle} moviez = {moviez} />
            </div>
        </div>
        
    );
}

 
export default Main;