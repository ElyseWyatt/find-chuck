import React from 'react'

class Clue extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <h1>{this.props.challenge.clue}</h1>
    )
  }
}

export default Clue
