import "./CharacterGallery.css"
import React from "react";
import {Episode} from "../model/Episode";
import EpisodeCard from "./EpisodeCard";
type episodeGalleryProp = {
    episodes: Episode[]
}
export default function EpisodeGallery(Props: episodeGalleryProp) {
    return (
        <main className={"episode-gallery"}>
            {Props.episodes.map(episode => <EpisodeCard key ={episode.id} episode={episode}/>)}
         </main>
    )
}