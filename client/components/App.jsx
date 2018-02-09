import React from 'react'
import Clue from './Clue'
import NewMap from './Map'
import ChuckWin from './ChuckWin'
import { getChallenges } from '../api.js'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

const chuckFacts = [
  'Chuck Norris was bitten by a cobra and after five days of excruciating pain... the cobra died.',
  'When Chuck Norris turned 18, his parents moved out.',
  'There used to be a street named after Chuck Norris, but it was changed because nobody crosses Chuck Norris and lives.',
  'Chuck Norris ordered a Big Mac at Burger King, and got one.',
  'Chuck Norris doesn\'t tell lies. He changes facts.'
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      upcomingChallenges: [],
      challenges: {},
      nextChuckFact: 'When Chuck Norris turned 18, his parents moved out.'
    }
    this.initialiseChallenges = this.initialiseChallenges.bind(this)
    this.nextChallenge = this.nextChallenge.bind(this)
    this.getChuckFact = this.getChuckFact.bind(this)
  }

  initialiseChallenges(err, challengeList) {
    const challengeListEdited = challengeList
    let temp = challengeList.shift()
    temp = Array(temp)
    this.setState({
      error: err,
      challenges: challengeListEdited || {},
      upcomingChallenges: temp
    })
  }

  nextChallenge() {
    const next = this.state.challenges.shift()
    let upcoming = this.state.upcomingChallenges
    upcoming.push(next)
    this.setState({
      upcomingChallenges: upcoming
    })
  }

  getChuckFact() {
    console.log(this.state.nextChuckFact)
    const lastFact = this.state.nextChuckFact
    let nextFact = chuckFacts[Math.floor(Math.random() * Math.floor(chuckFacts.length))]
    if (lastFact === nextFact) {
      nextFact = chuckFacts[Math.floor(Math.random() * Math.floor(chuckFacts.length))]
    }

    this.setState({
      nextChuckFact: nextFact
    })
  }

  componentDidMount() {
    getChallenges(this.initialiseChallenges)
  }

  render() {
    return (
      <Router>
        <div>
          <div className='hearts'>
            <img src='http://www.pngpix.com/wp-content/uploads/2016/03/Red-Heart-PNG-image.png' id='heart-1' />
            <img src='http://www.pngpix.com/wp-content/uploads/2016/03/Red-Heart-PNG-image.png' id='heart-2' />
          </div>
          <div className='page-box'>
            <div className='header'>
              <h1>Find Chuck!</h1>
            </div>
            <div className='blurb'>
              <p>It's nearly Valentine's Day and your valentine Chuck Norris has run off. Follow the clues, search through the map, and find Chuck!</p>
            </div>
            {/* <NewMap map={this.state.currentChallenge.map} /> */}
            <div id='container'>
              <NewMap />
            </div>
            <Clue challenges={this.state.upcomingChallenges} />

            {/* <button type='button' onClick={this.nextChallenge}>Cool Button</button> */}

            {/* Button for new Quote */}
            <div className='nextChuckFact'>
              <button type='button' onClick={this.getChuckFact}>Chuck Facts</button>
              <p>{this.state.nextChuckFact}</p>
            </div>

            <div>
              <Link to="/win"><button type='button'>Win</button></Link>
            </div>

          </div>
        <Route path='/win' component={ChuckWin} />

        </div>
      </Router>
    )
  }
}

export default App
