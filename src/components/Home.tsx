import React, {FC} from 'react';
import {
  Link
} from "react-router-dom";
import Header from './Header'

const title = "chihiroがハマってきたものたち"
const description = "chihiroがハマってきたものたちを覚えている限りで紹介させてもらいます。"

const Home:FC = () => {
  return (
    <div>
      <Header title={title} description={description}/>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/game">Game</Link></li>
      </ul>
    </div> );
}


export default Home;