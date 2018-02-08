module.exports = {
  getChallenges
  // saveWidget
}

const challengeData = require('../public/challengeData.json')

function getChallenges () {
  return challengeData
}

// function saveWidget (widget) {
//   widget.id = widgets.length + 1
//   widgets.push(widget)
// }
