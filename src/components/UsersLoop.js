import React from 'react';

function UsersLoop(props) {
    const users = props.users;
    
    return (
        <ul> 
            {users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
    )
    
}

export default UsersLoop;