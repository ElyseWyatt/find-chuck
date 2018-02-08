import React from 'react'
import Clue from './Clue'
import { getChallenges } from '../api.js'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentChallenge: {},
      challenges: {}
    }
    this.initialiseChallenges = this.initialiseChallenges.bind(this)
    this.nextChallenge = this.nextChallenge.bind(this)
  }

  initialiseChallenges (err, challengeList) {
    this.setState({
      error: err,
      challenges: challengeList || {},
      currentChallenge: challengeList.shift()
    })
  }

  nextChallenge () {
    if (this.state.challenges.length > 0) {
      this.setState({
        currentChallenge: this.state.challenges.shift()
      })
    }
    
  }

  componentDidMount () {
    getChallenges(this.initialiseChallenges)
  }

  render () {

    return (
      <div>
        <h1>Test</h1>
        {/* 
      <Map map={this.state.currentChallenge.map} /> */}

        <button type='button' onClick={this.nextChallenge}>Cool Button</button>
        <Clue challenge={this.state.currentChallenge} />
      </div>
    )
  }
}

export default App
