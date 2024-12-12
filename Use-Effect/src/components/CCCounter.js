import React, { Component } from 'react'

export default class CCCounter extends Component {

    
    constructor(props) {
      super(props);
    
      this.state = {
         counter: 0,
         wickets: 0,
      }
    }
    
    componentDidMount = ()=>{
        console.log("CCCounter - loaded");
    };

    shouldComponentUpdate = ()=>{
      console.log("CCCounter - should component update");

        return true;
    };

    componentWillUnmount = ()=>{
        console.log("CCCounter - component will unloads");
    };

    componentDidUpdate = ()=>{
        console.log("CCCounter - component updated");
    }

  render() {

    console.log("render");
    return (
        <div className='counter'>
        <h2>CCCounter</h2>
        <h1>Counter:{this.state.counter}</h1>
        <h1>Wickets:{this.state.wickets}</h1>

        <button onClick={()=>{

            this.setState({counter: this.state.counter + 1});

        }}>Increment</button>
        <button onClick={()=>{
            this.setState({counter:this.state.counter - 1});
        }}>Decrement</button>

        <br></br>

       <button onClick={()=>{
              this.setState({wickets:this.state.wickets +1})
       }}>Increment Wickets</button>
        <button onClick={()=>{
             this.setState({wickets:this.state.wickets - 1})
        }}>Decrement Wickets</button>
    </div>
    );
  }
}
