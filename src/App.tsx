import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home'
import GameList from './components/GameList'
import ComicList from './components/ComicList'
import games from './data/game.json'
import comics from './data/comic.json'
import { Responsive } from 'semantic-ui-react';
import Header from './components/Header'

const homeStyle = {
  container: {
    pc: {
      width: 750,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 100,
      marginBottom: 100
    },
    phone: {
      marginLeft: 15,
      marginRight: 15,
      marginTop: 100,
      marginBottom: 100
    }
  }
}

const App: FC = () => {
  return (
    <Router>
      <Responsive minWidth={768}>
        <Header />
        <div style={homeStyle.container.pc}>
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
      </Responsive>
      <Responsive maxWidth={767}>
        <Header />
        <div style={homeStyle.container.phone}>
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
      </Responsive>
    </Router>
  );
}

export default App;
