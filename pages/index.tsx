import React from 'react';
import { NextPage } from 'next';
import PageHead from '@/components/pagehead';
import MainLayout from '@/components/layouts';
import Map from '@/components/map';

const Home: NextPage = () => {
    return (
        <>
            <MainLayout>
                <PageHead title="Home" />
                <Map />
            </MainLayout>
        </>
    );
};

export default Home;
