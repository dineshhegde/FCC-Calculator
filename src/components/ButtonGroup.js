import React from 'react';


const ButtonGroup = (props) => {

    const style = {
     
        buttonGroupContainer : {
        height: "20%",
        display: "flex"
        
     }
    }

    return (
        <div style= {style.buttonGroupContainer}>
           {props.children}
        </div>

    )

}


export default ButtonGroup;