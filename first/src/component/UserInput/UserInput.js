import React from 'react';

const userInput=(props)=>{
    return(
       <div>
           <input onChange={props.change} value={props.Usedvalue}></input>
       </div>
    )
}

export default userInput;