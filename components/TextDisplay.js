import React, { Component } from 'react'

class TextDisplay extends Component {


  render ()  {
   return <div>I'm going to display text from my parent: {this.props.text} </div>
  }


}

export default TextDisplay
