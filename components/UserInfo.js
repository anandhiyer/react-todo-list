import React, { Component } from 'react'

class UserInfo extends Component {

  handleNewId () {
        this.props.actions.createNewUserId();
  }

  handleNewOddId () {
        this.props.actions.createNewUserIdIfOdd();
  }

handleAsyncId() {
        this.props.actions.createNewUserIdAsync();
}


  render ()  {
   return  (
      <li>
        <div> username {this.props.user.username} </div>
        <div> id: {this.props.user.id} </div>
        <button onClick={this.handleNewId.bind(this)}> Update with random ID</button>
        <button onClick={this.handleNewOddId.bind(this)}> Update when onlyODD</button>
        <button onClick={this.handleAsyncId.bind(this)}> Update Async</button>
      </li>
   )
  }



}

export default UserInfo
