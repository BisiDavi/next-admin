import { PropsWithChildren, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { Footer, Sidebar, Header } from '@components/.';
import styles from '@styles/Pagelayout.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { isTokenValid } from '@components/requests';

export default function PageLayout({
    children,
    title,
}: PropsWithChildren<pageLayoutProps>) {
    const router = useRouter();

    useEffect(() => {
        isTokenValid(router);
    }, [router]);

    return (
        <>
            <Head>
                <title>{title} | Instadrop </title>
                response.data?.message{' '}
            </Head>
            <div className={styles.pagelayout}>
                <Header title={title} />
                <Sidebar />
                <ToastContainer />
                <main className='container-fluid'>{children}</main>
                <Footer />
            </div>
            <style jsx>{`
                .pagelayout {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    grid-template-rows: 1fr 2fr 1f;
                }
            `}</style>
        </>
    );
}

interface pageLayoutProps {
    title: String;
}
