import React from 'react';
import Lottie from 'lottie-react';
import mappin from '@/components/animation/mappin.json';
import PageHead from '../pagehead';
const Loader: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#001529]">
            <PageHead title="Loading..." />
            <section className="space-y-5 text-center">
                <Lottie animationData={mappin} className="w-64" />
                <h4 className="text-white text-2xl">MAPBOX</h4>
                <h4 className="text-white animate-pulse">Made By Lekan Daramola</h4>
            </section>
        </div>
    );
};

export default Loader;
