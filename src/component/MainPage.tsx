import CharGalleryPage from "./CharGalleryPage";
import {Character} from "../model/Character";
import React, {ChangeEvent, useState} from "react";
import {Episode} from "../model/Episode";
import {Route, Routes} from "react-router-dom";
import CharDetailPage from "./CharDetailPage";
import useItemGallery from "../hooks/useItemGallery";
type MainPageProps = {
    fetchNextPage(): void
    pageDown(): void
    handleText(text: string): void
    rmApiEpisodes: Episode[]
    filteredChars: Character[]
    rmApiChars: Character[]
    handleFilter(filter: string): void
    text: string
}
export default function MainPage(props: MainPageProps) {
    const[selectedG, setGallery] = useState("characters")

    function handleGallerySelector(event: ChangeEvent<HTMLInputElement>){
        setGallery(event.target.value)
    }
    return (
        <>
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
                    <CharGalleryPage fetchNextPage={props.fetchNextPage} filteredChars={props.filteredChars}
                                     handleFilter={props.handleFilter} handleText={props.handleText}
                                     pageDown={props.pageDown} rmApiChars={props.rmApiChars} text={props.text}
                                     episodes={props.rmApiEpisodes} galleryType={"characters"}/>
                </>:
                <p>Invalid</p>}


        </>
    )
}