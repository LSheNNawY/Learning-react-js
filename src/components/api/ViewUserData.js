import React from "react";

export default function ViewUserData(props) {
    return <div>
        <p><strong>Name:</strong> {props.user.name}</p>
        <p><strong>Email:</strong> {props.user.email}</p>
    </div>
}