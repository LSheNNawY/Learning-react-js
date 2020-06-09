import React, { Component } from 'react';
import UsersLoop from './UsersLoop'

class ListsComponent extends Component {
    constructor(props) 
    {
        super(props);
        
        this.state = {
            users: [
                {id: 1, name: 'salah'},
                {id: 2, name: 'ayman'},
                {id: 3, name: 'ali'},
            ]
        }
    }
    
   
    render() {
        return (
            <div>
                <h5>Users: </h5>
                <UsersLoop users={this.state.users}/>
            </div>
        );
    }
}

export default ListsComponent;