import React, {FC} from 'react';

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
        <p>{headerProp.description}</p>
      </header>
    </div> );
}


export default Header;