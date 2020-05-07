import React, {FC} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Responsive} from 'semantic-ui-react';
import Header from './components/Header'
import Home from './components/Home'
import GameList from './components/GameList'
import ComicList from './components/ComicList'
import games from './data/game.json'
import comics from './data/comic.json'

const homeStyle = {
  pc: {
    width: 750,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    marginBottom: 100
  },
  phone: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 40,
    marginBottom: 100
  },
  container: {
    paddingTop: 30
  }
}

const App: FC = () => {
  return (
    <Router>
      <Responsive minWidth={768}>
        <div style={homeStyle.pc}>
          <Header />
          <div style={homeStyle.container}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/game">
                <GameList items={games}/>
              </Route>
              <Route path="/comic">
                <ComicList items={comics}/>
              </Route>
            </Switch> 
          </div>
        </div>
      </Responsive>
      <Responsive maxWidth={767}>
        <div style={homeStyle.phone}>
          <Header />
          <div style={homeStyle.container}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/game">
                <GameList items={games}/>
              </Route>
              <Route path="/comic">
                <ComicList items={comics}/>
              </Route>
            </Switch>
          </div>
        </div>
      </Responsive>
    </Router>
  );
}

export default App;
