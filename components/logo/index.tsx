import React from 'react';
import Link from 'next/link';
import MapboxImage from '../mapboximage';

interface IProps {
    type: 'color' | 'black' | 'no-background' | 'white';
}

const Logo: React.FC<IProps> = ({ type }: IProps) => {
    return (
        <Link href={'/'} passHref>
            <figure className="w-16 h-10 xl:w-36 xl:h-16">
                <MapboxImage width={146} height={54} src={`/svgs/logo-${type}.svg`} alt="Logo" />
            </figure>
        </Link>
    );
};

export default Logo;
