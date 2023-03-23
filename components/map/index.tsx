import React from 'react';
import Mapbox, { Marker, Popup, NavigationControl, FullscreenControl, ScaleControl, MapProvider } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CITIES } from '../config';

const Map: React.FC = () => {
    return (
        <Mapbox
            id="mymap"
            initialViewState={{
                longitude: 9.082,
                latitude: 8.6753,
                zoom: 5,
            }}
            style={{ minWidth: '85vw', minHeight: '100vh' }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_URL}
        >
            <NavigationControl position="top-left" />
            <ScaleControl position="bottom-left" />
            <FullscreenControl position="top-right" />
            {CITIES.map(({ id, lat, lng }) => {
                return (
                    <Marker key={id} longitude={Number(lng)} latitude={Number(lat)} anchor="bottom">
                        <span className="text-red-600 text-4xl shadow-md">
                            <FaMapMarkerAlt />
                        </span>
                    </Marker>
                );
            })}
        </Mapbox>
    );
};

export default Map;
