import React from 'react';

const userOutput=(props)=>{
    return(
        <div>
            <p>The username is : {props.username} and password is: {props.password}</p>
        </div>
    )
}

export default userOutput;