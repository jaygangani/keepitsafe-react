import { GoPlus } from "react-icons/go";
import {useState} from "react";
import { React } from "react";

function Addnote(props) {
    const [data, setdata] = useState([
        {
            title: "",
            time: "",
            disc: ""
        }
    ]);

    const inputchange = (event) => {


        const { name, value } = event.target;


        setdata((previousdata) => {
            return {
                ...previousdata,
                [name]: value,
                time : new Date().toLocaleTimeString()
            }
        })
    }

    const eventadd = () => {
        props.passfunction(data);
    }
    return (
        <>
           <center> <div className="form">
                <input type="text" value={data.title} onChange={inputchange} required placeholder="Title" name="title" className="title" autoComplete="off"/><br/>
                <textarea placeholder="Enter Notes..." value={data.disc} required name="disc" onChange={inputchange} className="discription" />
                <p className="timestamp"  >{new Date().toLocaleTimeString()}</p>
                <button className="button" onClick={eventadd}><GoPlus /></button>
            </div>
            </center>
        </>
    );
}

export default Addnote;