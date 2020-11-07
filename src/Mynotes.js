import { React } from "react";

function Mynotes(props) {
    return (
        <>
        <div className="notesData">
                <h3 className="notestitle">{props.title}</h3>
                <p className="notestime">{props.time}</p>
                <p className="notesdes">{props.disc}</p>
        </div>
        </>
    );
}

export default Mynotes;