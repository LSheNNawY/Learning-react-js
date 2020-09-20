import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: 'Salah',
                age: '25'
            },

            time: new Date()
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.timeId = this.setState({ time: new Date() })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return <div>
            <p>Time now is, <strong>{this.state.time.toLocaleTimeString()}</strong> , Using componentDidMount()</p>
            <p>Your name is, {this.state.user.name}</p>
            <p>Your Age is, {this.state.user.age}</p>
            <p>Your laptop model is, {this.props.laptopModel}</p>
        </div>

    }
}

export default ClassComponent 