import React from 'react';
import { NextPage } from 'next';
import PageHead from '@/components/pagehead';

const Home: NextPage = () => {
    return (
        <>
            <PageHead title="Home" />
            <h1>Home Page</h1>
        </>
    );
};

export default Home;
