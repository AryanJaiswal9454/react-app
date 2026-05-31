import { Component } from "react";
export default class LifeCycleInCBC extends Component{
    constructor(){
        super();
        console.log(" I am Constructor");
        this.state={count:0};
        
    }
    increment=() => this.setState({count: this.state.count+1});
    componentDidMount(){
        console.log("i am component did mount");
        this.intervalId=setInterval(() => {
            console.log("APi callled");
            
        }, 2000);
}
    componentDidUpdate() {
        console.log(" going to update");
        
    } ;
    componentWillUnmount(){
        console.log("compenent is going to  unmount");
        clearInterval(this.intervalId)
        
    }
    
    render(){
       console.log("I am render ");
       return(
        <div>
        <h1>count is  {this.state.count} </h1>
        <button onClick={this.increment}>Increment</button>
        </div>
       );
       
    }
}