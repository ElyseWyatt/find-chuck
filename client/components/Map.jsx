import React from 'react'
// import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

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
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>
            <span>Wheres Chuck??</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default NewMap
