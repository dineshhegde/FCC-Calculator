import React from 'react';


 const Screen = (props) => {

    const style = {
        screenWrapper: {
            width: "100%",
            minHeight:"60px",
            background: "#E0C9B5",
            boxShadow: "inset -27px -27px 54px #a69586, inset 27px 27px 54px #fffde4",
            display:"flex",
            flexDirection: "column",
            padding: "0 5px"      
        },

        screen : {
            width: "100%",
            height:"50%",
            display:"flex",
            alignItems:"center",
            justifyContent:"flex-end",
            fontWeight: "900"
        },

        sideScreen : {
           fontSize: "0.9rem",
           color: "#00047F"
        },

        mainScreen : {
            fontSize: "2rem"
        }

    }

    return(
        <div style={style.screenWrapper}>
            <div style={{...style.screen, ...style.sideScreen}} >
                   {props.subValue}   
            </div>
            <div style={{...style.screen,...style.mainScreen}}>
                    {props.val}
            </div>
        </div>
    ) 
}

export default Screen;
