import React, { Component } from 'react'

class FormComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
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
            email: '',
            password: '',
            description: ''
        })
    }

    render() {
        return <form onSubmit={this.formSubmit}>
            Name: <br />
            <input type="text" name="email" value={this.state.email} onChange={this.inputChange} />
            <br />
            Email: <br />
            <input type="password" name="password" value={this.state.password} onChange={this.inputChange} />
            <br />
            Decription: <br />
            <textarea name="description" cols="30" rows="10" value={this.state.description} onChange={this.inputChange}></textarea>
            <br />
            <input type="submit" value="Send" />
        </form>
    }
}

export default FormComponent