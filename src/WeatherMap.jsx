import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import L from 'leaflet';
import React from 'react';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

const WeatherMap = ({ lat, lon, city, openWeatherMapApiKey, layer }) => {
    return (
        <MapContainer center={[lat, lon]} zoom={10} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                style="opacity: 0.5;"
            />

            <TileLayer
                url={`https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${openWeatherMapApiKey}`}
                attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                style="opacity:1;"
            />

            <Marker position={[lat, lon]}>
                <Popup>{city}</Popup>
            </Marker>
        </MapContainer>
    );
};

export default WeatherMap;
