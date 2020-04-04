import React from 'react'

const Button = (props) => {

    const style = {
        buttonStyle : {
            height: "100%",
            width: `${ props.width * 25}%`,
            border:"1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background : `${ props.bg }`,
            fontSize:"1.5rem",
            cursor: "pointer"
        },

        vertical: {
            position: "absolute",
            left: "100%",
            bottom: "0",
            height: "156px",
            width: "87.5px",
            transform: "translateX(-100%)"
        }


    }
    const setRightHandler = (value) => {
        switch(value) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case ".": 
                return props.handleNumberClick(value);
                
            case "AC":
            case "X":
            case "+":
            case "-":
            case "/":
            case "=":
                return props.handleOperationsClick(value);
                
            default:
                break;

        }
    }
    return (
        <div style={props.isVertical ? {...style.buttonStyle, ...style.vertical} : style.buttonStyle}
        onClick = {() => setRightHandler(props.value)}
        >
          {props.value}
        </div>
    )
}

export default Button;