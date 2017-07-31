import React, { Component } from 'react'
import ToDoItem from './ToDOItem'

class ToDoList extends Component {


  render ()  {
   return  (
      <ul>
      {
            this.props.todos.map((todo) => {
                return <ToDoItem key={todo.id} todo={todo} actions={this.props.actions} ></ToDoItem>
            })
      }
      </ul>
   )
  }



}

export default ToDoList
