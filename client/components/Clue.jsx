import React from 'react'
import Challenge from './Challenge'
class Clue extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }


  render () {
    console.log(this.props.challenges)
    // if (!this.props.challenges[0]) {
    //   return (<h1>Loading</h1>)
    // }
    return (
      <div>
        <h1>Hello</h1>
        <div>{this.props.challenges.map((clue, id) => {
          return <Challenge key={id} challenge={clue} />
        })}</div>
      </div>
    )
  }
}

export default Clue
