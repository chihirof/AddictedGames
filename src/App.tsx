import React, { FC } from 'react';
import Header from './components/Header'
import GameList from './components/GameList'
import { Responsive } from 'semantic-ui-react'

const title = "chihiroがハマってきたゲームたち"
const description = "chihiroがハマってきたゲームを覚えている限りで紹介させてもらいます。"

const appStyle = {
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
    <div>
      <Responsive minWidth={768}>
        <div style={appStyle.container.pc}>
          <Header title={title} description={description}/>
          <GameList />
        </div>
      </Responsive>
      <Responsive maxWidth={767}>
      <div style={appStyle.container.phone}>
        <Header title={title} description={description}/>
        <GameList />
      </div>
    </Responsive>
  </div>
  );
}

export default App;
