import React, { Component } from 'react';

class ClassComponent extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         user: {
    //             name: 'salah',
    //             age: 25
    //         },
    //         time: new Date()
    //     }
    // }
    state = {
        user: {
            name: 'salah',
            age: 25
        },
        time: new Date()
    }

    componentDidMount() {
        setInterval(()=> {
            this.timerId = this.setState({
                time: new Date()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        
        return (
            <div>
                <p> Welcome, {this.state.user.name} from class component</p>
                <p>your age is {this.state.user.age} </p>
                <h5>time now is, {this.state.time.toLocaleTimeString()}</h5>
                <h4>laptop model is, {this.props.laptopModel}</h4>
            </div>
        );
    }
}

export default ClassComponent;