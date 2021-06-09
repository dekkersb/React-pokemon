import React, {useState} from "react";

function Buttons (props) {
const [offSet, setOffset] = useState(0);

return(
    <div>
    <button
    onClick={setOffset +20}
    >
        volgende</button>
    <button
    onClick={setOffset -20}
    >vorige</button>
    </div>
        )
}

export default Buttons;