import React from 'react'
// import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer, Polygon } from 'react-leaflet'
// const data = require('../../public/challengeData.json')

class NewMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }



  render () {
    const position = [this.state.lat, this.state.lng]
    const polygon = [[51.515, -0.09], [51.52, -0.1], [51.52, -0.12]]
    const positionOne = [this.state.lat, this.state.lng];
    return (

      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Polygon color="purple" positions={polygon} />
        
        {/* <Marker position={positionOne}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker> */}

      </Map>
    )
  }
}

export default NewMap
