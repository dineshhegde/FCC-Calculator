import React from "react";
import Screen from './Screen';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import { create, all } from 'mathjs'

const config = { }
const math = create(all, config);

class Calculator extends React.Component {
    style = {
        container: {
            width:"350px",
            height:"450px",
            display : "flex",
            flexDirection: "column",
            borderRadius: "15px", 
            background: "linear-gradient(315deg, #f0d7c2, #cab5a3)",
            boxShadow:  "-27px -27px 54px #b7b4b2, 27px 27px 54px #ffffff"
            
        },
        buttonGroupWrapper : {
            flexGrow: "1",
            width: "100%",
            position: "relative"
        },
      
    }

    currentStringNumber = '';
    isDecimalPointPresent = false;
    operationArray = []
    
    operationAC = async () => {
            this.currentStringNumber = '';
            this.isDecimalPointPresent = false;
            this.operationArray = [];

            await this.setState({
             currentNumber : 0,
             currentStringNumber: "0",
             subScreen: ""
         });
    }

    operationPlus = async () => {
        if(this.currentStringNumber === "+") {
            return;
        }
        this.operationArray.push(this.state.currentNumber);
        this.operationArray.push("+");  
        this.currentStringNumber = '+';
        this.isDecimalPointPresent = false;
        let opString = this.operationArray.join(' ');
        await this.setState({
         currentNumber : 0,
         currentStringNumber: "+",
         subScreen: opString
     });

    }

    operationMinus = async () => {
        if(this.currentStringNumber === "-") {
            return;
        }
        this.operationArray.push(this.state.currentNumber);
        this.operationArray.push("-");  
        this.currentStringNumber = '-';
        this.isDecimalPointPresent = false;
        // this.operationArray = [];
        let opString = this.operationArray.join(' ');
        await this.setState({
         currentNumber : 0,
         currentStringNumber: "-",
         subScreen: opString
     });
    }

    operationMultiply = async () => {
        if(this.currentStringNumber === "X") {
            return;
        }
        this.operationArray.push(this.state.currentNumber);
        this.operationArray.push("X");  
        
        this.currentStringNumber = 'X';
        this.isDecimalPointPresent = false;
        // this.operationArray = [];
        let opString = this.operationArray.join(' ');

        await this.setState({
         currentNumber : 0,
         currentStringNumber: "X",
         subScreen: opString
     });
    }

    operationDivide = async () => {
        if(this.currentStringNumber === "/") {
            return;
        }
        this.operationArray.push(this.state.currentNumber);
        this.operationArray.push("/");  
        
        this.currentStringNumber = '/';
        this.isDecimalPointPresent = false;
        // this.operationArray = [];
        let opString = this.operationArray.join(' ');
        await this.setState({
         currentNumber : 0,
         currentStringNumber: "/",
         subScreen: opString
     });
    }

    operationEqual = async () => {
           
        let opString;
         opString = this.operationArray.join(' ');
        let lastValue = parseFloat(this.currentStringNumber);
        if(!isNaN(lastValue)){
            opString += this.currentStringNumber;
        }
        if(isNaN(lastValue)) {
            this.operationArray.pop();
            opString = this.operationArray.join(' ');
        } 
        opString = math.evaluate(opString);
        await this.setState({

            currentNumber : parseFloat(opString),
            currentStringNumber: opString

        })
    }

    handleOperationsClick = async(op) => {
        switch(op) {
            case "+" :
                this.operationPlus();
                break;
            case "-" :  
                this.operationMinus();
                break;
            case "X" : 
                this.operationMultiply();
                break;
            case "/" :
                this.operationDivide();
                break;
            case "AC":
                this.operationAC();
                break;
            case "=":
                this.operationEqual();
                break;
            default:
                break;
        }
        
        
    }

    handleNumberClick =  async (number) => {
        if( /[+X\/-]/g.test(this.currentStringNumber)) {
            this.currentStringNumber = ""
        }
        if(this.isDecimalPointPresent === false) {
            if(number === ".") {
                if(this.state.currentStringNumber === "0") {
                    this.currentStringNumber = "0"
                }
                this.currentStringNumber += number;
                await this.setState({
                    currentStringNumber: this.currentStringNumber,
                    subScreen : this.currentStringNumber
                });
                this.isDecimalPointPresent = true
            }
        }
        
        if(number !== ".") {
            this.currentStringNumber += number;
                await this.setState({
                    currentStringNumber: this.currentStringNumber,
                    subScreen: this.currentStringNumber
                });
                let newNumber = parseFloat(this.currentStringNumber);
        
                await this.setState({
                    currentNumber : newNumber
        
                })
        }
        
        
    }

    state = {
        currentNumber : 0,
        currentStringNumber: "0",
        subScreen : ""
        
    }

    render () {
        return(
            <div style= {this.style.container}>
                <Screen  val = {this.state.currentStringNumber} subValue = {this.state.subScreen}/>
                <div style={this.style.buttonGroupWrapper}>

                <Button width={2} isVertical={true} bg={"#FF867D"} value={"="} handleOperationsClick = {this.handleOperationsClick}/>
                  
                  <ButtonGroup>
                        <Button width={2} bg={"#508CCC"} value={"AC"} handleOperationsClick = {this.handleOperationsClick}/>
                        <Button width= {1} bg ={"#8EA1A5"} value={"/"} handleOperationsClick = {this.handleOperationsClick}/>
                        <Button width= {1} bg ={"#8EA1A5"} value={"X"} handleOperationsClick = {this.handleOperationsClick}/>
                        
                  </ButtonGroup>
                  <ButtonGroup>
                        <Button width= {1} bg ={"#456A72"} value={"7"} handleNumberClick = {this.handleNumberClick} />
                        <Button width= {1} bg ={"#456A72"} value={"8"} handleNumberClick = {this.handleNumberClick} />
                        <Button width= {1} bg ={"#456A72"} value={"9"} handleNumberClick = {this.handleNumberClick}/> 
                        <Button width= {1} bg ={"#8EA1A5"} value={"-"} handleOperationsClick = {this.handleOperationsClick}/>
                 </ButtonGroup>
                  <ButtonGroup> 
                        <Button width= {1} bg ={"#456A72"} value={"4"} handleNumberClick = {this.handleNumberClick}/>
                        <Button width= {1} bg ={"#456A72"} value={"5"} handleNumberClick = {this.handleNumberClick}/>
                        <Button width= {1} bg ={"#456A72"} value={"6"} handleNumberClick = {this.handleNumberClick}/> 
                        <Button width= {1} bg ={"#8EA1A5"} value={"+"} handleOperationsClick = {this.handleOperationsClick}/>
                  </ButtonGroup>
                  <ButtonGroup>
                        <Button width= {1} bg ={"#456A72"} value={"1"} handleNumberClick = {this.handleNumberClick}/>
                        <Button width= {1} bg ={"#456A72"} value={"2"} handleNumberClick = {this.handleNumberClick}/>
                        <Button width= {1} bg ={"#456A72"} value={"3"} handleNumberClick = {this.handleNumberClick}/>
                  </ButtonGroup>
                  <ButtonGroup> 
                        <Button width= {2} bg ={"#456A72"} value={"0"} handleNumberClick = {this.handleNumberClick}/>
                        <Button width= {1} bg ={"#456A72"} value={"."} handleNumberClick = {this.handleNumberClick}/>
                        
                  </ButtonGroup>
                </div>
            </div>
           

        )
    }
}


export default Calculator