

import Nav from './components/nav';
import MovieAbout from './components/movie-about';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/main';
import MovieDetails from './movie-details';
// import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { Component } from 'react';


class App extends Component{

  render(){
    const moviez = this.props.moviezs

    return (
      <Router>
        <div className="App">
          <div id="wrapper">
            <div className="div-row" id="page-content-wrapper">
              <Nav />
              <div className="main" id="">
                <Switch>
                  <Route exact path="/">
                    <Main moviez = {moviez}/>
                  </Route>
                  <Route path="/movie/:id">
                    <MovieDetails />
                  </Route>
                </Switch>
              </div>
            </div>
            <MovieAbout />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    moviezs: state.moviezs
  }
}

export default connect(mapStateToProps)(App);
