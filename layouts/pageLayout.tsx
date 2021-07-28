import { PropsWithChildren } from 'react';
import Head from 'next/head';
import { Footer, Sidebar, Header } from '@components/.';
import styles from '@styles/Pagelayout.module.css';

export default function pageLayout({
    children,
    title,
}: PropsWithChildren<pageLayoutProps>) {
    return (
        <>
            <Head>
                <title>{title} | Instadrop </title>
            </Head>
            <div className={styles.pagelayout}>
                <Header title={title} />
                <Sidebar />
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
