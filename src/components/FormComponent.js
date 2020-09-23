import React, { Component } from 'react'

class FormComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            description: ''

        }

    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault()
        alert('Data sent!')
        this.setState({
            name: '',
            email: '',
            description: ''
        })
    }

    render() {
        return <form onSubmit={this.formSubmit}>
            Name: <br />
            <input type="text" name="name" value={this.state.name} onChange={this.inputChange} />
            <br />
            Email: <br />
            <input type="email" name="email" value={this.state.email} onChange={this.inputChange} />
            <br />
            Description: <br />
            <textarea name="description" cols="30" rows="10" value={this.state.description} onChange={this.inputChange}/>
            <br />
            <input type="submit" value="Send" />
        </form>
    }
}

export default FormComponent