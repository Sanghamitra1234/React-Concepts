import React from 'react';

const validation=(props)=>{
    return (
        <div>
            { props.leng>10 ? <p>Text is too long</p>: 
            props.leng<5?<p>Text is too short</p>:
            <p>Text is ok</p>}
        </div>
    );
}


export default validation;