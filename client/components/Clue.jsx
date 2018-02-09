import React from 'react'
import Challenge from './Challenge'
class Clue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log(this.props.challenges)
    // if (!this.props.challenges[0]) {
    //   return (<h1>Loading</h1>)
    // }
    return (
      <div>
        <h3>Clue:</h3>
        <p className='chuck-clue'>Chuck is hiding in a place where a clock and an eye come together.</p>
        {/* <div>{this.props.challenges.map((clue, id) => {
          return (
            <div key={id}>
              <h3>Next Clue:</h3>
              <Challenge challenge={clue} />
            </div>
          )
        })}</div> */}
      </div>
    )
  }
}

export default Clue
