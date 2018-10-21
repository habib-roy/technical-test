import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.handleChangeFactorial = this.handleChangeFactorial.bind(this);
        this.handleChangeFibonacci = this.handleChangeFibonacci.bind(this);
        this.state = { valueFactorial: 0, valueFibonacci: 0};
        this.state.data = [{
        		name: 'Mike',
        		age: 23,
        		gender: 'm',
        		us: false,
        	},
        	{
        		name: 'Liz',
        		age: 20,
        		gender: 'f',
        		us: true,
        	},
        	{
        		name: 'Chris',
        		age: 102,
        		gender: 'm',
        		us: true,
        	},
        	{
        		name: 'Chuloo',
        		age: 27,
        		gender: 'm',
        		us: false,
        	},
        	{
        		name: 'Annie',
        		age: 30,
        		gender: 'f',
        		us: true,
        	},
        ];
    }

    handleChangeFactorial(e) {
        this.setState({ valueFactorial: e.target.value });
    }

    handleChangeFibonacci(e) {
        this.setState({ valueFibonacci: e.target.value });
    }

    // Function
    factorial(n) {
        if (n === 0) return 1;
        let f = 1;
        for (let i = 1; i < n; i++) {
            f = f * (i + 1);
        }
        return f;
    }

    fibonacci(n){
      let arr = [0, 1];
      for (let i = 2; i < n + 1; i++){
        arr.push(arr[i - 2] + arr[i -1])
      }
     return arr[n]
    }

    dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    changeValue(property){
        for (let i=0; i<property.length; i++) {
            property[i].us = (property[i].us) ? false : true;
        }
        return property
    }

    aliasingGenderValue(property){
        for (let i=0; i<property.length; i++) {
            if (property[i].gender === 'f') {
                property[i].gender = 'female'
            }else if (property[i].gender === 'm') {
                property[i].gender = 'male'
            }else {
                property[i].gender = 'transgender'
            }
        }
        return property
    }

    getValueFactorial() {
        return { __html:  this.factorial(this.state.valueFactorial) };
    }

    getValueFibonacci() {
        return { __html: this.fibonacci(this.state.valueFibonacci) };
    }

    getValueSorted(){
        return { __html: JSON.stringify(this.state.data.sort(this.dynamicSort("name"))) };
    }

    getValueChangeUsField(){
        return { __html: JSON.stringify(this.changeValue(this.state.data)) };
    }

    getValueChangeGenderField(){
        return { __html: JSON.stringify(this.aliasingGenderValue(this.state.data)) };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">

                </header>
                <content className="Content">
                    <center><h2><b>Technical Test</b></h2></center>
                    <p><b>Part 1, Implement the following function.</b></p>
                    <li className="Li">Find factorial number of input numbers using recursion.</li>
                    <p>Please enter numbers : <input id="input-factorial" onChange={this.handleChangeFactorial}/></p>
                    <p>The factorial of inputs are : <div className="valueHtml" dangerouslySetInnerHTML={this.getValueFactorial()}/></p>
                    <li className="Li">Find the Nth Fibonacci numbers using iteration.</li>
                    <p>Please enter numbers : <input id="input-fibonacci" onChange={this.handleChangeFibonacci}/></p>
                    <p>The Fibonacci of input are : <div className="valueHtml" dangerouslySetInnerHTML={this.getValueFibonacci()}/></p>
                    <p><b>Part 2, Display the data of the following.</b></p>
                    <li className="Li">Name sorted in alphabetical ascending order.</li>
                    <p>The result : <div className="valueHtml" dangerouslySetInnerHTML={this.getValueSorted()}/></p>
                    <li className="Li">Change us field from false to true and true to false.</li>
                    <p>The result : <div className="valueHtml" dangerouslySetInnerHTML={this.getValueChangeUsField()}/></p>
                    <li className="Li">Change gender field from m -> male, f -> female.</li>
                    <p>The result : <div className="valueHtml" dangerouslySetInnerHTML={this.getValueChangeGenderField()}/></p>
                </content>
            </div>
        );
    }
}

export default App;
