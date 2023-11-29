/*jshint esversion: 6 */
import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";

class GoogleMap extends Component {
    render() {
        const mapStyles = {
            width: '56%',
            height: '300px',
        };

        return (
            <div id="map-contact" className="contact-map">
                <Map
                    google={this.props.google}
                    zoom={18}
                    style={mapStyles}
                    initialCenter={{ lat: 42.690941, lng: 23.312689 }}
                >
                    <Marker position={{ lat: 42.690941, lng: 23.312689 }} />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA3zVO0rI-7CFUGUmTuSIXBKXT8GzO1V3w',
})(GoogleMap);
