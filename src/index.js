import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './components/Calculator'


const App = () => {
   const style = {
       container : {
          background : `#E0C9B5`,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
       }
   }
 

    return(
        <div style={style.container}>
            <Calculator />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
