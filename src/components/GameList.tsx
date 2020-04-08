import React, { FC } from 'react';
import { Item, Divider } from 'semantic-ui-react'
import games from '../data/game.json'

const GameList: FC = () => {

  return (
    <div>
      <Item.Group>
        { games.game.map(game => (
          <Item>
            <Item.Content>
              <Item.Header>{game.name}</Item.Header>
              <Item.Meta>{game.release_date} {game.selling_agency}</Item.Meta>
              <Item.Meta>{game.hardware}</Item.Meta>
              <Divider />
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div> );
}

export default GameList;