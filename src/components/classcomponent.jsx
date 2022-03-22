import React from "react";
class Header extends React.Component{
    constructor(){
        super();
        this.state={
            name:"kiran",
            border:"10px solid green"
            
        }

    }

    render(){
        return(
            <div style={{border:this.state.border}}><p> My name is {this.state.name}</p></div>
        )
    }
}
export default Header
