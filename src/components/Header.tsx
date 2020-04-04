import React, {FC} from 'react';

interface HeaderProp {
  title: string,
  description: string
}

const Header:FC<HeaderProp> = (headerProp) => {
  return (
    <div>
      <header>
        <h1>{headerProp.title}</h1>
        <p>{headerProp.description}</p>
      </header>
    </div> );
}


export default Header;