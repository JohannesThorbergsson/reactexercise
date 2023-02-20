import React from 'react';
import {Link} from "react-router-dom";
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
type charProp = {
    character: Character,

}
export default function CharCard(Props: charProp) {
    return (
        <div className={`card ${Props.character.status==='Alive'? 'alive' : 'notalive'}`}>
            <h1>
                {Props.character.name}
            </h1>
            <img src={Props.character.image} alt={"CharImage"}/>
            <section className={"cardBottom"}>
            <h3 className={"charspecies"}>
                <p>
                    Species: {Props.character.species}
                </p>
            </h3>
                <Link className={"details"} to={"/details/"+Props.character.id}>Details</Link>
            </section>
        </div>
    )
}