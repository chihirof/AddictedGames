import React, {FC} from 'react';
import {Segment} from 'semantic-ui-react'

interface HeaderProp {
  title: string,
  description: string
}

const headerStyle = {
  height: 150
}

const Header:FC<HeaderProp> = (headerProp) => {
  return (
    <div style={headerStyle}>
      <header>
        <h1>{headerProp.title}</h1>
        <Segment>
          <p>{headerProp.description}</p>
        </Segment>
      </header>
    </div> );
}


export default Header;