import React, { Component } from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'

class App extends Component {

  render() {
    return (
        <div className="_app">
          <h1>This is the App Component</h1>
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
