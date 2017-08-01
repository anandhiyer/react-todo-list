import React, { Component } from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'
import UserInfo from './UserInfo'
class App extends Component {

  render() {
    let inlineStyle = {color:'blue'}
    return (
        <div className="_app">
          <h1 style={inlineStyle}> React ToDo List</h1>
          <UserInfo user={this.props.user} actions={this.props.actions}/>
          <ToDoInput addTodo={this.props.actions.addTodo} />
          <ToDoList actions={this.props.actions} todos={this.props.todos}/>
        </div>

      )
  }

}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
