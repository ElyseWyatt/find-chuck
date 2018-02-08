import React from 'react'
import Challenge from './Challenge'
class Clue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    for (let i = 0; i < this.props.challenges.length; i++) {
      return <Challenge challenge={this.props.challenges[i]}></Challenge>
    }
  }

  render() {
    return (
      <h1>Hello</h1>
      // <h1>{this.props.challenges[0].clue}</h1>
      // <div>{this.props.challenges.map(chal => {
      //   return <Challenge challenge={chal} />
      // })}</div>
    )
  }
}

export default Clue
