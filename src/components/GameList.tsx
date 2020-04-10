import React, { FC } from 'react';
import { Item, Divider } from 'semantic-ui-react'

interface ItemListProp {
  items: {game:{name:string, hardware:string, url:string, release_date:string, selling_agency:string, impression?:string}[]}
}

const GameList: FC<ItemListProp> = (itemListProp) => {

  return (
    <div>
      <Item.Group>
        { itemListProp.items.game.map((item, index) => (
          <Item key={index}>
            <Item.Content>
              <Item.Header as="a" href={item.url} target="_target">{item.name}</Item.Header>
              <Item.Meta>{item.release_date} {item.selling_agency}</Item.Meta>
              <Item.Meta>{item.hardware}</Item.Meta>
              <Item.Description>{item.impression}</Item.Description>
              <Divider />
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div> );
}

export default GameList;