import {useEffect, useState} from "react";
import {Character} from "../model/Character";
import axios from "axios";
import {Episode} from "../model/Episode";

export default function useItemGallery(galleryType: string){
    const [galleryState, setGalleryState] = useState<string>(galleryType)
    const [text, setText] = useState<string>("")
    const [filter, setFilter] = useState<string>("")
    const [rmApiChars, setFullArray] = useState<Character[]>([])
    const filteredChars: Character[] = applyFilter(rmApiChars)
    const [page, setPage] = useState<number>(1)
    const [rmApiEpisodes, setEpisodes] =useState<Episode[]>([])
    useEffect(fetchRMApiData, [page])

    function fetchRMApiData() {
        if (galleryState==="episodes") {
            axios.get("https://rickandmortyapi.com/api/episode", {params: {page: page}})
                .then(r=>setEpisodes(r.data.results))
                .catch( (error) => {console.log(error)})
        } else {
            axios.get("https://rickandmortyapi.com/api/character", {params: {page: page}})
                .then(r=>setFullArray(r.data.results))
                .catch( (error) => {console.log(error)})
        }
    }

    function fetchNextPage() {
        setPage(page+1)
    }
    function pageDown(){
        if(page>1) {
            setPage(page-1)
        }
    }
    function handleText(text: string) {
        setText(text)
    }
    function handleFilter(filter: string) {
        setFilter(filter)
    }
    function applyFilter(arrayToFilter: Character[]): Character[] {
        if(filter === "name" || filter==="species" || filter ==="status")
            return arrayToFilter.filter((c:Character)  => c[filter].toLowerCase()
                .includes(text.toLowerCase()))
        else return []
    }
    return {handleFilter, handleText, pageDown, fetchNextPage, filteredChars, rmApiChars, text, setGalleryState, rmApiEpisodes}
}