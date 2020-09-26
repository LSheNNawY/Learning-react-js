import React, {Component} from 'react';
import {getUsers, getUser} from "../../api/users";
import ViewUserData from "./ViewUserData";

class UsersComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {},
            user: {}
        }
    }

    getUserData = (id) => {
        getUser(id).then(user => {
            this.setState({user: user.data})
        }).catch(error => console.log('Error !'))
    }

    componentDidMount() {
        getUsers().then(users => {
              this.setState({users: users.data})
        }).catch(error => console.log('Error !'))
    }

    render() {
        let usersList = () => {
            const users = this.state.users;
            if (users.length > 0) {
               return <ul style={{
                    display: 'inline-block', float: 'left',
                    border: '2px solid black',
                    padding: '20px'
                   }
               }>
                   {users.map(user =>
                        <div key={user.id}>
                           <li style={{display: 'inline-block', minWidth: '200px', marginBottom: '20px'}}>{user.name}</li>
                           <button onClick={() => this.getUserData(user.id)}>view data</button>
                        </div>
                   )}
               </ul>
            }

            return 'No users found';
        }
        return (
            <div>
                <h3>users</h3>
                {usersList()}

                <div style={{
                    display: 'inline-block', minWidth: '200px',
                    marginLeft: '100px'}
                }>
                    <h3>User Data</h3>
                    {(this.state.user.id > 0)? <ViewUserData user={this.state.user}/> : <strong>No User Data</strong>}
                </div>
            </div>


        );
    }
}

export default UsersComponents;