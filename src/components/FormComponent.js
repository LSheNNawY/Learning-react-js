import React, { Component } from 'react';

class FormComponent extends Component {
    constructor(props) 
    {
        super(props);
        this.state = {
            name: '',
            email: '',
            description: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({
            // ...this.state,
            [e.target.name] : e.target.value
        })

    }

    handleSubmit(e) {
        console.log(this.state)
        e.preventDefault();
    }

    render() {
        return (
            <form>
                Name: 
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <br/>
                Email:
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                <br/>
                <textarea name="description" cols="30" rows="10" value={this.state.dscription} onChange={this.handleChange} />
                <br/>
                <input type="submit" value="Clcik" onClick={this.handleSubmit}/>
            </form>
        );
    }
}

export default FormComponent;