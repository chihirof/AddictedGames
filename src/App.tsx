import React, { FC } from 'react';
import Header from './components/Header'
import GameList from './components/GameList'

const title = "chihiroがハマってきたゲームたち"
const description = "chihiroがハマってきたゲームを覚えている限りで紹介させてもらいます。"

const appStyle = {
  container: {
    width: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100,
    marginBottom: 100
  }
}

const App: FC = () => {
  return (
    <div style={appStyle.container}>
      <Header title={title} description={description}/>
      <GameList />
    </div>
  );
}

export default App;
