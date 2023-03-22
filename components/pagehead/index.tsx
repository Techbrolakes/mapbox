import React from 'react';
import Head from 'next/head';
import PAGE_HEAD from './constants';

interface IProps {
    description?: string;
    keywords?: string[];
    title: string;
}

const PageHead: React.FC<IProps> = ({ title, description, keywords }: IProps) => {
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords?.join(',')} />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <title>{`${PAGE_HEAD.APP_NAME} - ${title}`}</title>
            </Head>
        </>
    );
};

PageHead.defaultProps = {
    description: PAGE_HEAD.PAGE_DESC,
    keywords: PAGE_HEAD.PAGE_KEYWORDS,
};

export default PageHead;
