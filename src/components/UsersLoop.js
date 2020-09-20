import React from 'react'

function UsersLoop(props) {
    const users = props.users;

    return <ul>
        {/* using user id as a key */}
        {users.map((user) => <li key={user.id}>{user.name}</li>)}

        {/* if there is a unique key returned from loop, use index loop */}

        {/* {users.map((user, index) => <li key={index}>{user.name}</li>)} */}

    </ul>
}

export default UsersLoop