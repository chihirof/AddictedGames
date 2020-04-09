import React, { FC } from 'react';
import { Item, Divider } from 'semantic-ui-react'
import games from '../data/game.json'

const GameList: FC = () => {

  return (
    <div>
      <Item.Group>
        { games.game.map((game, index) => (
          <Item key={index}>
            <Item.Content>
              <Item.Header as="a" href={game.url} target="_target">{game.name}</Item.Header>
              <Item.Meta>{game.release_date} {game.selling_agency}</Item.Meta>
              <Item.Meta>{game.hardware}</Item.Meta>
              <Item.Description>{game.impression}</Item.Description>
              <Divider />
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div> );
}

export default GameList;