import React, { Component } from 'react';
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { numbers:[1,1,1,2,3,2,2,3,2,] }
    }
    handleclick = ()=>{
        let newnums =[...this.state.numbers,'added and spread works']
        this.setState({numbers:newnums})
        console.log(this.state.numbers)
    }
    render() { 
        return ( <div>
            {this.state.numbers}
            <button onClick={this.handleclick}>click this</button>
        </div> );
    }
}
 
export default Test;