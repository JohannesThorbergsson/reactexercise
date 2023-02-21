import React from 'react';
import CharCard from "./CharCard";
import "./CharCard.css"
import "./CharacterGallery.css"
type origin = {name: string, url: string}
type location = {name: string, url: string}
type Character = {
    "id": number,
    "name": string,
    "status": string,
    "species": string,
    "type": string,
    "gender": string,
    "origin": origin,
    "location": location,
    "image": string,
    "episode": string[],
    "url": string,
    "created": string
}
type galleryProp ={
    characters: Character[],

}


export default function CharacterGallery(Props: galleryProp) {
    return (
        <>
        {Props.characters.map(character => <CharCard key ={character.id} character={character}/>)}
        </>
    )
}