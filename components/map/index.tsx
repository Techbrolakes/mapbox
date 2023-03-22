import React from 'react';
import Mapbox, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CITIES } from '../config';

const Map: React.FC = () => {
    return (
        <div>
            <Mapbox
                id="mymap"
                initialViewState={{
                    longitude: 9.082,
                    latitude: 8.6753,
                    zoom: 4,
                }}
                style={{ minWidth: '100vw', minHeight: '100vh' }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_URL}
            >
                {CITIES.map(({ id, lat, lon, name }) => {
                    return (
                        <Marker key={id} longitude={Number(lon)} latitude={Number(lat)} anchor="bottom">
                            <span className="text-red-600 text-4xl shadow-md">
                                <FaMapMarkerAlt />
                            </span>
                        </Marker>
                    );
                })}
            </Mapbox>
        </div>
    );
};

export default Map;
