import React from 'react'
import Clue from './Clue'
import NewMap from './Map'
import { getChallenges } from '../api.js'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      upcomingChallenges: [],
      challenges: {}
    }
    this.initialiseChallenges = this.initialiseChallenges.bind(this)
    this.nextChallenge = this.nextChallenge.bind(this)
  }

  initialiseChallenges (err, challengeList) {
    const challengeListEdited = challengeList
    let temp = challengeList.shift()
    temp = Array(temp)
    this.setState({
      error: err,
      challenges: challengeListEdited || {},
      upcomingChallenges: temp
    })
  }

  nextChallenge () {
    const next = this.state.challenges.shift()
    let upcoming = this.state.upcomingChallenges
    upcoming.unshift(next)
    this.setState({
      upcomingChallenges: upcoming
    })
  }
  componentDidMount () {
    getChallenges(this.initialiseChallenges)
  }

  render () {
    return (
      <div>
        <h1>Test</h1>
        {/* <NewMap map={this.state.currentChallenge.map} /> */}
        <div id="container">
          <NewMap />
        </div>
        <button type='button' onClick={this.nextChallenge}>Cool Button</button>
        <Clue challenges={this.state.upcomingChallenges} />
      </div>
    )
  }
}

export default App
