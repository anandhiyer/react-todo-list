import React, { Component } from 'react'
import actions from '../redux/actions'

class ToDoInput extends Component {

constructor(props,context) {
    super(props,context)
    this.state = {
        inputText: ''
    }
}

  handleSubmit (event) {
      event.preventDefault();
      this.props.dispatch(actions.addTodo(this.state.inputText))
  }


  render ()  {
   return  (
     <div>
     <input
      type="text"
      placeholder="Type in your todo"
      value={this.state.inputText}
      onChange={this.handleChange.bind(this)}
      ></input>
      <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
   )
  }

  handleChange (event) {
    console.log(event.target.value)
    this.setState({
        inputText : event.target.value
    })

  }

}

export default ToDoInput
