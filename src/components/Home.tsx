import React, {FC} from 'react';
import {
  Link
} from "react-router-dom";
import {Segment} from 'semantic-ui-react'

const title = "chihiroがハマってきたものたち"
const description = "chihiroがハマってきたものたちを覚えている限りで紹介させてもらいます。"

const headerStyle = {
  height: 150
}

const Home:FC = () => {
  return (
    <div>
      <div style={headerStyle}>
        <header>
          <h1>{title}</h1>
          <Segment>
            <p>{description}</p>
          </Segment>
        </header>
      </div> 
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/game">Game</Link></li>
      </ul>
    </div> );
}


export default Home;