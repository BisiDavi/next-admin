/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, PropsWithChildren, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useLocalStorage } from '../hooks/.';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import { Footer, Sidebar, Header } from '@components/.';
import styles from '@styles/Pagelayout.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { isLoggedIn } from '@components/requests';

export default function PageLayout({
    children,
    title,
}: PropsWithChildren<pageLayoutProps>) {
    const [currentUser, setCurrentUser] = useState(null);
    const { getStorage } = useLocalStorage();

    const router = useRouter();

    useEffect(() => {
        const currentUserDetails = getStorage('currentUser');
        console.log('currentUser', currentUser);
        setCurrentUser(currentUserDetails);
    }, []);

    useEffect(() => {
        const currentUserDetails = getStorage('currentUser');
        isLoggedIn(currentUserDetails, router, currentUser?.token);
    }, []);

    return (
        <UserContext.Provider value={{ user: currentUser?.data }}>
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
        </UserContext.Provider>
    );
}

interface pageLayoutProps {
    title: String;
}
