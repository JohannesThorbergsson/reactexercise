import React, {ChangeEvent, useState} from 'react';
import logo from './rick-and-morty-logo.png';
import './App.css';
import {Route, Routes} from "react-router-dom";
import CharDetailPage from "./component/CharDetailPage";
import CharGalleryPage from "./component/CharGalleryPage";
import useItemGallery from "./hooks/useItemGallery";
import MainPage from "./component/MainPage";

function App() {
    const[selectedG, setGallery] = useState("characters")
    const {handleText, handleFilter, filteredChars, fetchNextPage, pageDown, rmApiChars, text, setGalleryState,rmApiEpisodes} =
        useItemGallery("character")
    function handleGallerySelector(event: ChangeEvent<HTMLInputElement>){
        setGallery(event.target.value)
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <strong>The Rick and Morty character gallery</strong>
        </h1>
      </header>
        <div>
            <p>Navigate</p>
            <input onChange={handleGallerySelector} type="radio" id="chars"
                   name="selectedGallery" value="characters"/>
            <label htmlFor="chars">Characters</label>
            <input onChange={handleGallerySelector} type="radio" id="episodes"
                   name="selectedGallery" value="episodes"/>
            <label htmlFor="episodes">Episodes</label>

        </div>
        {selectedG==="characters"?
            <>
                <CharGalleryPage fetchNextPage={fetchNextPage} filteredChars={filteredChars}
                                 handleFilter={handleFilter} handleText={handleText}
                                 pageDown={pageDown} rmApiChars={rmApiChars} text={text}
                                 episodes={rmApiEpisodes} galleryType={"characters"}/>
            </>:
            <p>Invalid</p>}
                <Routes>
                    <Route path={"/details/:id"} element={<CharDetailPage chars={rmApiChars}/>}/>
                    {/*<Route path={""} element=*/}
                    {/*    {<MainPage/>}/>*/}
                </Routes>

    </div>
  )
}

export default App;
