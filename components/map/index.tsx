import { useState, useEffect } from 'react';
import Mapbox, { Marker, Popup, NavigationControl, FullscreenControl, ScaleControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CITIES } from '../config';
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';

type City = {
    id: number;
    lat: number;
    lng: number;
    name: string;
};

const Map: React.FC = () => {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const [weatherData, setWeatherData] = useState<any>();
    const [popupOpen, setPopupOpen] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        const fetchWeatherData = async () => {
            if (selectedCity) {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${selectedCity.lat}&lon=${selectedCity.lng}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`,
                );
                setWeatherData(response.data);
            }
        };
        fetchWeatherData();
    }, [selectedCity]);

    const handleMarkerClick = (cityId: number) => {
        setPopupOpen({ ...popupOpen, [cityId]: true });
    };

    const handlePopupClose = () => {
        setPopupOpen({});
    };

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
            {CITIES.map(({ id, lat, lng, name }) => (
                <div key={id}>
                    <Marker longitude={lng} latitude={lat} anchor="bottom" onClick={() => handleMarkerClick(id)}>
                        <span className="text-red-600 cursor-pointer text-4xl shadow-md">
                            <FaMapMarkerAlt />
                        </span>
                    </Marker>
                    {popupOpen[id] && (
                        <Popup key={id} style={{ zIndex: 100 }} longitude={lng} latitude={lat} onClose={handlePopupClose} closeButton>
                            <div>
                                <h2>{name}</h2>
                                {weatherData && (
                                    <>
                                        <p>Temperature: {weatherData.main.temp}°C</p>
                                        <p>Weather: {weatherData.weather[0].description}</p>
                                    </>
                                )}
                            </div>
                        </Popup>
                    )}
                </div>
            ))}
        </Mapbox>
    );
};

export default Map;
