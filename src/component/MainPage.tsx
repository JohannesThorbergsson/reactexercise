import CharGalleryPage from "./CharGalleryPage";
import {Character} from "../model/Character";
import React, {ChangeEvent} from "react";
import {Episode} from "../model/Episode";
import EpisodeGallery from "./EpisodeGallery";

type MainPageProps = {
    fetchNextPage(): void
    pageDown(): void
    handleText(text: string): void
    rmApiEpisodes: Episode[]
    filteredChars: Character[]
    rmApiChars: Character[]
    handleFilter(filter: string): void
    text: string
    setGalleryState(state:string): void
    galleryState: string
}
export default function MainPage(props: MainPageProps) {

    function handleGallerySelector(event: ChangeEvent<HTMLInputElement>){
        props.setGalleryState(event.target.value)

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
            {props.galleryState==="characters"?
                <>
                    <CharGalleryPage fetchNextPage={props.fetchNextPage} filteredChars={props.filteredChars}
                                     handleFilter={props.handleFilter} handleText={props.handleText}
                                     pageDown={props.pageDown} rmApiChars={props.rmApiChars} text={props.text}
                                     episodes={props.rmApiEpisodes} galleryType={"characters"}/>
                </>:
                <EpisodeGallery episodes={props.rmApiEpisodes}/>
                    }
        </>
    )
}