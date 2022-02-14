import React from "react";
import CardUi from "./CardUi";
import userListClasses from './UserList.module.css';

class userList extends React.Component {
    render() {
        console.log(this.props.adduser)
        return (
            <CardUi className={userListClasses.users}>
            <ul>{this.props.adduser.map((addusers) => 
                <li key={addusers.id}>
                    {addusers.username} ({addusers.age} years old)
                </li>
            )}
            </ul>
            </CardUi>
        )
    }
}

export default userList;