import {Episode} from "../model/Episode";
import {Link, useParams} from "react-router-dom";
import {Character} from "../model/Character";
import React, {useEffect, useState} from "react";
import axios from "axios";

type epDetailProp = {
    episodes: Episode[]
}
export default function EpisodeDetailPage(props: epDetailProp){
    const params = useParams()
    const id: string | undefined = params.id
    const selectedEpisode: Episode | undefined = props.episodes
        .find(e => e.id === parseInt(id? id: ""))



    return (
        <div className={"episode-details"}>
            <h1 className={"ep-detail-name"}>
                {selectedEpisode?.name}
            </h1>
            <h3>Appearing Characters:</h3>
            {selectedEpisode?.characters.map(c => <p>{c}</p>)}
            <section>
                <h3 className={"detail-air-date"}>
                    {"Air Date: " +selectedEpisode?.air_date}
                </h3>
                {/*<Link className={"ep-details"} to={"/episode/details/"+selectedEpisode?.id}>Details</Link>*/}
            </section>
        </div>
    )
}