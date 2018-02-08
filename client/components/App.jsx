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
  }

  initialiseChallenges (err, challenges) {
    this.setState({
      error: err,
      challenges: challenges || {}
    })
  }

  componentDidMount () {
    getChallenges(this.initialiseChallenges)
  }

  render () {
    // console.log(getChallenges())
    // this.initialiseChallenges()

    return (
      <div>
        <h1>Test</h1>
        {/* 
      <Map map={this.state.currentChallenge.map} /> */}


        <Clue challenge={this.state.challenges} />
      </div>
    )
  }
}

export default App
