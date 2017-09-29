import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styles from './createCampaignApp/forms/form_material_styles'
import Animation from 'react-addons-css-transition-group'
import { config } from "dotenv"
import { Marker, GoogleMap, DirectionsRenderer } from "react-google-maps"

import DesktopMapComponent from "./desktopMapComponent"
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

config()
const google = window.google


class JobseekerParent extends Component {
  render() {
    const footerStyle = {
      textAlign: "center",
      position: "fixed",
      left: "0",
      bottom: "0",
      paddingBottom: "2px",
      minHeight: "40px",
      width: "100%",
      borderTop: "1px solid",
      borderColor: "#DCDCDC",
      backgroundColor: "white",
      zIndex: "8000",
      overflow: "hidden"
    }
    return (
              <div>
                <div style={{float: "left", width: "60%", position: "fixed", height: "100vh"}}>
                
                  <DesktopMapComponent 
                    zoom={10}
                    center={{ lat: 51.537452, lng: -0.497681}}
                    containerElement={<div style={{height: 100+"%"}} />}
                    mapElement={<div style={{height: 100+"%"}} />}
                  />
                
                </div>

                <div style={{width: "40%", float: "right"}}>
                  <div style={{marginBottom: "90px", paddingLeft: "10px", paddingRight: "10px", borderLeft: "1px solid grey", marginTop: "-20px"}}>
                  </div>
                </div>
              </div>
    )
  }
}

JobseekerParent.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default JobseekerParent
