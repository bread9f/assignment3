import React from 'react';
import logo from './logo.svg';
import PhotoCard from './components/photoCard'
import SearchBar from './components/searchBar'
import Navbar from './components/navbar'
import './App.css';

function App() {
  return (
    <div>
     <Navbar/>
    <header class="header">
      <div class="container">
        <h1 class="title">Mavel's Fearless</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <SearchBar/>

        <div class="sample-wallpaper">
          
          <PhotoCard photoPath="../img/venom-2.jpg">
          <img src={require("./img/venom-1.jpg")} alt="Wallpaper #1" class="wallpaper" />
          </PhotoCard>
          <PhotoCard photoPath="../img/venom-2.jpg">
          <img src={require("./img/hulk-1.jpg")} alt="Wallpaper #1" class="wallpaper" />
          </PhotoCard>

          <PhotoCard photoPath="../img/venom-2.jpg">
          <img src={require("./img/venom-2.jpg")} alt="Wallpaper #1" class="wallpaper" />
          </PhotoCard>
        </div>
      </div>
    </header>
    </div>
  );
}

export default App;
