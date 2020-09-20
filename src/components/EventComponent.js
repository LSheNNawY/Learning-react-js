/*import React, { Component } from 'react';

class EventComponent extends Component {
    state = {
        age: 25
    }

    // this is experimental way to use this keyword 
    increment = () => {
        this.setState({age: this.state.age + 1})
    }

    decrement() {
        this.setState({age: this.state.age - 1})
    }

    linkClicked(id, e) {
        e.preventDefault();
        console.log(`clicked, id is ${id}` );
    }


    render() {
        let id = 3;
        return (
            <div>
                <h5>Age: {this.state.age}</h5>
                <button onClick={this.increment}>Increase</button>
                <button onClick={this.decrement.bind(this)}>Decrease</button>
                <br/>
                Click Me: <a href="/test" onClick={this.linkClicked.bind(this, id)}>Link #</a>

            </div>
        );
    }
}

export default EventComponent; */

import React, { Component } from 'react';

class EventComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 25
        }
    }

    // increase value by 1
    increase = () => {
        let age = this.state.age
        this.setState({
            age: ++age
        })
    }

    // decrease value by 1
    decrease = () => {
        let age = this.state.age
        this.setState({
            age: --age
        })
    }

    render() {
        return <div>
            <p>Your age is, <strong> {this.state.age} </strong></p>
            <button onClick={this.increase}>Increase +</button> &nbsp;
            <button onClick={this.decrease}>Decrease -</button>
        </div>
    }
}

export default EventComponent