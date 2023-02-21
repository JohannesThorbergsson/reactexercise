import {Link} from "react-router-dom";
import React from "react";
import {Episode} from "../model/Episode";
import "./EpisodeCard.css"
type episodeProp = {
    episode: Episode
}

export default function EpisodeCard(Props: episodeProp) {
    return (
        <div className={"episode-card"} key={Props.episode.id}>
            <h1 className={"ep-name"}>
                {Props.episode.name}
            </h1>
            <h3>Appearing Characters:</h3>
            {Props.episode.characters.map(c => <p>{c}</p>)}
            <section>
                <h3 className={"air-date"}>
                    {"Air Date: " +Props.episode.air_date}
                </h3>
                <Link className={"details"} to={"/episode/details/"+Props.episode.id}>Details</Link>
            </section>
        </div>
    )
}