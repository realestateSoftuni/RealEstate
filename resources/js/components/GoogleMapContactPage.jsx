/*jshint esversion: 6 */
import React from 'react';
import {GoogleMap, LoadScript} from "@react-google-maps/api";

const mapContainerStyle = {
    width: '100%',
    height: '300px',
};

const center = {
    lat: -34.397,
    lng: 150.644,
};

const GoogleMapsComponent = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyA3zVO0rI-7CFUGUmTuSIXBKXT8GzO1V3w">
            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA3zVO0rI-7CFUGUmTuSIXBKXT8GzO1V3w&v=weekly&callback=initMap"
                async
                defer
            ></script>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
            > </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapsComponent;
