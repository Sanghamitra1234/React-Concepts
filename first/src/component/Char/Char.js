import React from 'react';

const CharacterComp=(props)=>{
    const styleInsideDiv={
        "display":"inline-block",
        "padding":"16px",
        "textAlign":"center",
        "margin":"16px",
        "border":"1px solid black"
    }
    return (
        <div style={styleInsideDiv}>
            <p onClick={props.click}>{props.charName}</p>
        </div>
    )
}

export default CharacterComp;