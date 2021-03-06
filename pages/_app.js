/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';
import { Loading } from '@components/.';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css';
import '../styles/globals.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        Router.events.on('routeChangeStart', start);
        Router.events.on('routeChangeComplete', end);
        Router.events.on('routeChangeError', end);
        return () => {
            Router.events.on('routeChangeStart', start);
            Router.events.on('routeChangeComplete', end);
            Router.events.on('routeChangeError', end);
        };
    }, []);
    return (
        <>
            <Head>
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
                    integrity='sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=='
                    crossOrigin='anonymous'
                />
            </Head>
            {loading && <Loading />}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
