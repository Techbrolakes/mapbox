import React from 'react';
import Mapbox, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Map: React.FC = () => {
    const [showPopup, setShowPopup] = React.useState(false);

    return (
        <div>
            <Mapbox
                id="mymap"
                initialViewState={{
                    longitude: 9.082,
                    latitude: 8.6753,
                    zoom: 6,
                }}
                style={{ minWidth: '100vw', minHeight: '100vh' }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_URL}
            >
                <Marker longitude={-100} latitude={40} anchor="bottom">
                    <span className="text-red-600 text-4xl shadow-md cursor-pointer" onClick={() => setShowPopup(true)}>
                        <FaMapMarkerAlt />
                    </span>
                </Marker>

                {showPopup && (
                    <Popup longitude={-100} latitude={40} anchor="bottom" onClose={() => setShowPopup(false)}>
                        You are here
                    </Popup>
                )}

                <Marker longitude={-200} latitude={40} anchor="bottom">
                    <span className="text-red-600 text-4xl shadow-md">
                        <FaMapMarkerAlt />
                    </span>
                </Marker>
            </Mapbox>
        </div>
    );
};

export default Map;
