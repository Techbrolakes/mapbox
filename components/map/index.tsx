import { useState, useEffect } from 'react';
import Mapbox, { Marker, Popup, NavigationControl, FullscreenControl, ScaleControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CITIES } from '../config';
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Modal } from 'antd';
import { AiFillCloseSquare } from 'react-icons/ai';

type City = {
    id: number;
    lat: number;
    lng: number;
    name: string;
};

const Map: React.FC = () => {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const [weatherData, setWeatherData] = useState<any>();
    const [open, setOpen] = useState<boolean>(false);

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
                    <Marker
                        longitude={lng}
                        latitude={lat}
                        anchor="bottom"
                        onClick={() => {
                            setSelectedCity({ id, lat, lng, name });
                            setOpen(true);
                        }}
                    >
                        <span className="text-red-600 cursor-pointer text-4xl shadow-md">
                            <FaMapMarkerAlt />
                        </span>
                    </Marker>
                    {selectedCity && (
                        <Modal
                            closeIcon={<AiFillCloseSquare size={'32px'} />}
                            footer={null}
                            key={id}
                            open={open}
                            onCancel={() => setOpen(false)}
                        >
                            <div className="space-y-3 text-base text-dark capitalize">
                                <h1 className="text-center underline underline-offset-8 ">{selectedCity?.name} Weather Details</h1>
                                <h2>City : {selectedCity?.name}</h2>
                                {weatherData && (
                                    <>
                                        <p>Temperature: {weatherData.main.temp}°C</p>
                                        <p>Weather: {weatherData.weather[0].main}</p>
                                        <p>Weather Description: {weatherData.weather[0].description}</p>
                                    </>
                                )}
                            </div>
                        </Modal>
                    )}
                </div>
            ))}
        </Mapbox>
    );
};

export default Map;
