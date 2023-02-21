import React, {ChangeEvent, useState} from 'react';
import logo from './rick-and-morty-logo.png';
import './App.css';
import {Route, Routes} from "react-router-dom";
import CharDetailPage from "./component/CharDetailPage";
import CharGalleryPage from "./component/CharGalleryPage";
import useItemGallery from "./hooks/useItemGallery";
import MainPage from "./component/MainPage";

function App() {
    const {handleText, handleFilter, filteredChars, fetchNextPage, pageDown, rmApiChars, text, setGalleryState,rmApiEpisodes} =
        useItemGallery("character")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <strong>The Rick and Morty character gallery</strong>
        </h1>
      </header>

        <Routes>
            <Route path={"/details/:id"} element={<CharDetailPage chars={rmApiChars}/>}/>
            <Route path={"/"} element=
                {<MainPage fetchNextPage={fetchNextPage} filteredChars={filteredChars}
                           handleFilter={handleFilter} handleText={handleText} pageDown={pageDown}
                           rmApiChars={rmApiChars} rmApiEpisodes={rmApiEpisodes} text={text}/>}/>
        </Routes>
    </div>
  )
}

export default App;
