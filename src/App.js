

import Nav from './components/nav';
import MovieAbout from './components/movie-about';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/main';
import MovieDetails from './movie-details';
import { useSelector } from 'react-redux';


function App() {
  const moviez = useSelector(state => state.moviezs);
  const toggle = (id) => {
    console.log(id)
    let element = document.getElementById("wrapper");
    element.classList.toggle("toggled");
  }

  return (
    <Router>
      <div className="App">
        <div id="wrapper">
          <div className="div-row" id="page-content-wrapper">
            <Nav />
            <div className="main" id="">
              <Switch>
                <Route exact path="/">
                  <Main toggle={toggle}  moviez = {moviez}/>
                </Route>
                <Route path="/movie/:id">
                  <MovieDetails />
                </Route>
              </Switch>
            </div>
          </div>
          <MovieAbout toggle={toggle}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
