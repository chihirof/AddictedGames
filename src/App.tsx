import React, { FC } from 'react';
import Header from './components/Header'
import GameList from './components/GameList'

const title = "chihiroがハマってきたゲームたち"
const description = "chihiroがハマってきたゲームを覚えている限りで紹介させてもらいます。"

const App: FC = () => {
  return (
    <div className="App">
      <Header title={title} description={description}/>
      <GameList />
    </div>
  );
}

export default App;
