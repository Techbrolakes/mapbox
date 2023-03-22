import React from 'react';
import Mapbox from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map: React.FC = () => {
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
            />
        </div>
    );
};

export default Map;
