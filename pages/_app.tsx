import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}