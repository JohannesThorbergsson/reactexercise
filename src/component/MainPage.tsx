import CharacterGallery from "./CharacterGallery";
import React from "react";
import {Character} from "./Character";
import InputText from "./InputText";
import FilterByProp from "./FilterByProp";
import "./MainPage.css"

type MainPageProps = {
    filteredChars: Character[]
    rmApiChars: Character[]
    text: string
    fetchNextPage(): void
    pageDown(): void
    handleText(text: string):void
    handleFilter(filter:string): void

}

export default function MainPage(props: MainPageProps){
    return (
        <>
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
        </>
    )
}