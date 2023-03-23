import { Input } from 'antd';
import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { useMap } from 'react-map-gl';
import { CITIES } from '../config';

const Controls = () => {
    const { mymap } = useMap();
    const [filterText, setFilterText] = useState('');

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value);
    };

    const filteredCities = CITIES.filter((city) => city.name.toLowerCase().includes(filterText.toLowerCase()));

    const navigateByCoordinate = (lat: number, lng: number) => {
        mymap?.easeTo({
            center: [lng, lat],
            duration: 1000,
            zoom: 6,
        });
        console.log(lng, lat);
    };

    return (
        <div className="space-y-4">
            <section className="space-y-3">
                <span>Filter City: </span>
                <Input placeholder="Filter cities" onChange={handleFilterChange} />
            </section>

            <div className="space-y-6 flex flex-col">
                {filteredCities
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(({ id, lat, lng, name }) => {
                        return (
                            <span
                                className={`capitalize text-base cursor-pointer hover:text-secondary hover:font-bold`}
                                onClick={() => navigateByCoordinate(lat, lng)}
                                key={id}
                            >
                                {name}
                            </span>
                        );
                    })}
            </div>
        </div>
    );
};

export default Controls;
