import Header from "./Header";
import Footer from "./Footer";
import Addnote from "./Addnote";
import Mynotes from "./Mynotes";
import "./Keepitsafe.css";
import { useState } from "react";
import Ibutton from "./Ibutton";


function Keepitsafe() {

    const [adddata, addnewdata] = useState([]);

    
    const addthedata = (data) => {
        if (data.title === "" || data.disc === "") {
            alert("please Enter Notes")
        }
        else {
            addnewdata((previousdata) => {
                return [...previousdata, data]
            }
            )
            
        }
    }
    const newdata = [...new Set(adddata)];



    return (
        <>
            <Header />
                <Ibutton />
           
            <Addnote passfunction={addthedata} />
            <div className="Notes">
                {
                    newdata.map((val) => {
                    return (
                        <Mynotes title={val.title} time={val.time} disc= {val.disc} />
                            );
                })}  
                   
            </div>
            <Footer />  
        </>
    );
}

export default Keepitsafe;