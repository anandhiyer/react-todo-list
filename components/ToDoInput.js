import React, { Component } from 'react'


class ToDoInput extends Component {

constructor(props,context) {
    super(props,context)
    this.state = {
        inputText: ''
    }
}

  handleSubmit (event) {
      event.preventDefault();
      this.props.addTodo(this.state.inputText)
  }


  render ()  {
   return  (
     <div>
     <form onSubmit={this.handleSubmit.bind(this)}>
     <input
      type="text"
      placeholder="Type in your todo"
      value={this.state.inputText}
      onChange={this.handleChange.bind(this)}
      ></input>
      <input type="submit" text="Submit"></input>
      </form>
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
