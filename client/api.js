import request from 'superagent'

const dataUrl = 'http://localhost:3000/api/v1/mapData'

export function getChallenges (callback) {
  request
    .get(dataUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}

// export function appendWidget (widget, callback) {
//   request
//     .post(widgetUrl)
//     .send(widget)
//     .end((err, res) => {
//       callback(err)
//     })
// }

