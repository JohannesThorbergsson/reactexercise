import CharacterGallery from "./CharacterGallery";
import React from "react";
import {Character} from "../model/Character";
import InputText from "./InputText";
import FilterByProp from "./FilterByProp";
import "./MainPage.css"
import EpisodeGallery from "./EpisodeGallery";
import {Episode} from "../model/Episode";

type CharGalleryPageProps = {
    filteredChars: Character[]
    rmApiChars: Character[]
    episodes: Episode[]
    text: string
    fetchNextPage(): void
    pageDown(): void
    handleText(text: string):void
    handleFilter(filter:string): void
    galleryType: string

}

export default function CharGalleryPage(props: CharGalleryPageProps){
    return (
        <>
            {props.galleryType==="episodes"?
                <main>
                    <EpisodeGallery episodes={props.episodes}/>
                </main>:
                <section>
                    <div className={"Filter"}>
                        <FilterByProp handleFilter={props.handleFilter}/>
                        <button className={"filter-element"} onClick={props.pageDown}>Page down</button>
                        <InputText setText={props.handleText}/>
                        <button className={"filter-element"} onClick={props.fetchNextPage}>Page up</button>
                    </div>
                    <main>
                        {props.text!==""?
                            <CharacterGallery characters={props.filteredChars}/>:
                            <CharacterGallery characters={props.rmApiChars}/>}
                    </main>
                </section>
            }
        </>
    )
}