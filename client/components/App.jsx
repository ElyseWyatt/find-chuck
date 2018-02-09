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
        <div className='hearts'>
          <img src='http://www.pngpix.com/wp-content/uploads/2016/03/Red-Heart-PNG-image.png' id='heart-1'/>
          <img src='http://www.pngpix.com/wp-content/uploads/2016/03/Red-Heart-PNG-image.png' id='heart-2'/>
        </div>
        <div className='page-box'>
          <div className='header'>
            <h1>Find Chuck!</h1>
          </div>
          <div className='blurb'>
            <p>It's nearly Valentine's Day and your valentine Chuck Norris has run off. Follow the clues, search through the map, and find Chuck!</p>
          </div>
          {/* <NewMap map={this.state.currentChallenge.map} /> */}
          <div id="container">
            <NewMap />
          </div>
          <button type='button' onClick={this.nextChallenge}>Cool Button</button>
          <Clue challenges={this.state.upcomingChallenges} />
        </div>
      </div>

    )
  }
}

export default App
