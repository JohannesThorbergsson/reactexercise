
import React from "react";
import {Episode} from "../model/Episode";
import EpisodeCard from "./EpisodeCard";
type episodeGalleryProp = {
    episodes: Episode[]
}
export default function EpisodeGallery(Props: episodeGalleryProp) {
    return (
        <>
            {Props.episodes.map(episode => <EpisodeCard key ={episode.id} episode={episode}/>)}
    </>
    )
}