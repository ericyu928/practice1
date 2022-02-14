import React from 'react';
import UserAdd from './Component/UserAdd'
import UserList from "./Component/UserList";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={userlist:[],username:'',age:''};
  }

  addUserList = (newlist) =>{
    this.setState(prevState => ({
      userlist:[...prevState.userlist,newlist]
    }));
    // this.setState({userlist:newlist})
  }

  render() {
    return (
      <div>
        <UserAdd onAdduser={this.addUserList } />
        <UserList adduser={this.state.userlist} />

      </div>
    );
  }
}


export default App;
