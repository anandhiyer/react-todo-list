import React, { Component } from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import {connect } from 'react-redux'

class App extends Component {

  render() {
    return (
        <div className="_app">
          <h1>This is the App Component</h1>
          <ToDoInput dispatch={this.props.dispatch} />
          <ToDoList todos={this.props.todos}/>
        </div>

      )
  }

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(App)
