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
                {"Episode Name: " +Props.episode.name}
            </h1>
            <h3>Episode List</h3>
            {Props.episode.characters.map(c => <p>{c}</p>)}
            <section>
                <h3 className={"air-date"}>
                    {"Air Date: " +Props.episode.air_date}
                </h3>
                {/*<Link className={"details"} to={"/details/"+Props.character.id}>Details</Link>*/}
            </section>
        </div>
    )
}