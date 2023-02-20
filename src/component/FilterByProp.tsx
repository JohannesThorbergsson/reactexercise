import React, {ChangeEvent} from "react";

type filterProp ={
    handleFilter(filter:string): void
}
export default function searchFilter(prop: filterProp) {
        function  handleFilter(event: ChangeEvent<HTMLInputElement>) {
           prop.handleFilter(event.target.value)
        }
    return (
        <div>
            <input onChange={handleFilter} type="radio" id="status" name="fav_language" value="status"/>
            <label htmlFor="status">Status</label>
            <input onChange={handleFilter} type="radio" id="species" name="fav_language" value="species"/>
            <label htmlFor="species">Species</label>
            <input onChange={handleFilter} type="radio" id="name" name="fav_language" value="name"/>
            <label htmlFor="name">Name</label>
        </div>
    )
}

