import {BsInfo} from "react-icons/bs";
import { React } from "react";

function Ibutton() {
    return (
        <div className="ibutton">
        <div class="tooltip"> <BsInfo />
                <span class="tooltiptext">You Can Save Your Temperary Work Here <br /> <span>Can Not Save Duplicate Data </span>
                <span>Input field could not be null </span> <p>Loose Your Data On Reload</p></span>
            </div>
            </div>
    )
}

export default Ibutton;