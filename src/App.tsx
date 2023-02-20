import React, {useEffect, useState} from 'react';
import logo from './rick-and-morty-logo.png';
import './App.css';
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import CharDetailPage from "./component/CharDetailPage";
import {Character} from "./component/Character";
import MainPage from "./component/MainPage";

function App() {

    const [text, setText] = useState<string>("")
    const [filter, setFilter] = useState<string>("")
    const [rmApiChars, setFullArray] = useState<Character[]>([])
    const filteredChars: Character[] = applyFilter(rmApiChars)
    const [page, setPage] = useState<number>(1)
    useEffect(fetchRMApiChars, [page])

    function fetchRMApiChars() {
    axios.get("https://rickandmortyapi.com/api/character", {params: {page: page}})
        .then(r=>setFullArray(r.data.results))
        .catch( (error) => {console.log(error)})
    }
    // function fetchNextPage(){
    //   setPage(page+1)
    //   axios.get("https://rickandmortyapi.com/api/character", {params: {page: page}})
    //       .then(r=>setFullArray([...rmApiChars, r.data.results]))
    //       .catch( (error) => {console.log(error)})
    //   console.log(page)
    // }
    function fetchNextPage() {
      setPage(page+1)

    }
    function pageDown(){
      if(page>1) {
        setPage(page-1)
      }
    }
    function handleText(text: string) {
      setText(text)
    }
    function handleFilter(filter: string) {
      setFilter(filter)
    }
    function applyFilter(arrayToFilter: Character[]): Character[] {
      if(filter === "name" || filter==="species" || filter ==="status")
      return arrayToFilter.filter((c:Character)  => c[filter].toLowerCase()
          .includes(text.toLowerCase()))
        else return []
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <strong>The Rick and Morty character gallery</strong>
        </h1>
      </header>
      <Routes>
          <Route path={""} element=
              {<MainPage filteredChars={filteredChars} rmApiChars={rmApiChars} text={text}
                         fetchNextPage={fetchNextPage} handleText={handleText}
                         pageDown={pageDown} handleFilter={handleFilter}/>}/>
          <Route path={"/details/:id"} element={<CharDetailPage chars={rmApiChars}/>}/>
      </Routes>
    </div>
  );
}

export default App;
