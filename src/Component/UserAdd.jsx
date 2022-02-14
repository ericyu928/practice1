import React from "react";

import CardUi from "./CardUi";
import Button from "./Button";

import classes from './UserAdd.module.css';

class UserAdd extends React.Component{
    constructor(props){
        super(props);
        this.state={username:'',age:''};
    }
    usernameInput = event => {
        this.setState({username:event.target.value})
    }
    ageInput = event => {
        this.setState({age:event.target.value})
    }
    addUser = () =>{
        let NewUserList={
            username:this.state.username,
            age:this.state.age,
            id:Math.random().toString()
        }
        this.props.onAdduser(NewUserList);
    }
    render(){
        // console.log(classes);
        return(
            <div>
                <CardUi className={classes.input}>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.usernameInput}></input>
                <label>Age(Years)</label>
                <input type="number" value={this.state.age} onChange={this.ageInput}></input>
                <Button type="button" onClick={this.addUser}>Add User</Button>
                </CardUi>
            </div>
        )
    }
}

export default UserAdd;