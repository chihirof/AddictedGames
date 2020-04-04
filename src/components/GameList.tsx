import React, { FC } from 'react';
import games from '../data/game.json'

const GameList: FC = () => {
  let list = games.game.map((game, index) => <li key={index}>{game.name}</li>)

  return (
    <div>
      <ul>
        {list}
      </ul>
    </div> );
}

export default GameList;