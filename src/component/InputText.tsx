import {ChangeEvent} from "react";

type textProp = {
    setText(text: string): void
}
export default function searchText(prop: textProp) {

    function handleText(event: ChangeEvent<HTMLInputElement>) {
        prop.setText(event.target.value )
    }

    return (
        <input onChange={handleText}/>
    )
}
