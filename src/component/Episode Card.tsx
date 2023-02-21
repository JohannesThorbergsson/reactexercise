import {Link} from "react-router-dom";
import React from "react";
import {Episode} from "../model/Episode";
type episodeProp = {
    episode: Episode
}

export default function EpisodeCard(Props: episodeProp) {
    return (
        <div className={"episode-card"}>
            <h1>
                {Props.episode.name}
            </h1>
            {Props.episode.characters.map(c => <p>{c}</p>)}
            <section>
                <h3 className={"air-date"}>
                    Air Date:
                </h3>
                {/*<Link className={"details"} to={"/details/"+Props.character.id}>Details</Link>*/}
            </section>
        </div>
    )
}