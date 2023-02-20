import {useParams} from "react-router-dom";
import {Character} from "./Character";
import "./CharDetailPage.css"

type charDetailProp = {
    chars: Character[]
}
export default function CharDetailPage(props: charDetailProp) {
    const params = useParams()
    const id: string | undefined = params.id
    const selectedChar: Character | undefined = props.chars
        .find(c => c.id === parseInt(id? id: ""))

    return (
        <div className={"detail-page-body"}>
        <section className={"detail-element"}>
            <img src={selectedChar?.image} alt={"rmCharImage"}/>
            <div className={"advanced-details"}>
                <div className={"char-prop"}>
                    <h3>Name: </h3>
                    <p className={"prop-value"}>{selectedChar?.name}</p>
                </div>
                <div className={"char-prop"}>
                    <h3>Status: </h3>
                    <p className={"prop-value"}>{selectedChar?.status}</p>
                </div>
                <div className={"char-prop"}>
                    <h3>Gender: </h3>
                    <p className={"prop-value"}>{selectedChar?.gender}</p>
                </div>
                <div className={"char-prop"}>
                    <h3>Location: </h3>
                    <p className={"prop-value"}>{selectedChar?.location.name}</p>
                </div>
            </div>
        </section>
        </div>
    )
}