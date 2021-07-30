/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Pagelayout } from '@layouts/.';
import { useLocalStorage } from '../hooks/.';
import { Card } from '@components/.';
import tableContent from '../json/index.json';
import { displayBody, displayHead } from '@components/table';
import styles from '@styles/Home.module.css';

export default function Home() {
    const [currentUser, setCurrentUser] = useState(null);
    const { getStorage } = useLocalStorage();

    const cards = [
        { title: 'Pending Orders', count: '1,587' },
        { title: 'Orders Today', count: '46,782' },
        { title: 'Average Orders This Week', count: '200' },
        { title: 'All Time', count: '1,800' },
    ];

    useEffect(() => {
        const currentUserDetails = getStorage('currentUser');
        setCurrentUser(currentUserDetails);
    }, []);

    function userRole() {
        if (currentUser?.data.isSuperAdmin) {
            return 'Super Admin';
        }
    }

    const getUserRole = userRole();

    const pageTitle = getUserRole === undefined ? '' : getUserRole;

    return (
        <Pagelayout title={`Welcome ${pageTitle}`}>
            <div className={`${styles.home} container-fluid`}>
                <div className='row'>
                    {cards.map((card, index) => (
                        <div key={index} className='my-4 col-xl-3 col-md-6'>
                            <Card data={card} />
                        </div>
                    ))}
                </div>

                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <h4 className='card-title d-inline-block'>
                                    Daily Sales
                                </h4>

                                <div
                                    id='morris-donut-example'
                                    className='morris-chart'
                                    style={{ height: '260px' }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <h4 className='card-title d-inline-block'>
                                    Statistics
                                </h4>

                                <div
                                    id='morris-bar-example'
                                    className='morris-chart'
                                    style={{ height: '260px' }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <h4 className='card-title d-inline-block'>
                                    Total Revenue
                                </h4>

                                <div
                                    id='morris-line-example'
                                    className='morris-chart'
                                    style={{ height: '260px' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row my-4'>
                    <div className='col-xl-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <h4
                                    className={`${styles.title} card-title overflow-hidden`}
                                >
                                    Dispatcher Status
                                </h4>
                                <div className='table-responsive'>
                                    <table
                                        className='table table-centered table-hover table-xl mb-0 border-top'
                                        id='recent-orders'
                                    >
                                        <thead className='pt-3'>
                                            {displayHead(
                                                tableContent.dispatcherStatus,
                                            )}
                                        </thead>
                                        <tbody>
                                            {displayBody(
                                                tableContent.dispatcherStatus,
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <h4
                                    className={`${styles.title} card-title overflow-hidden`}
                                >
                                    Account Transactions
                                </h4>
                                <div className='table-responsive'>
                                    <table className='table table-borderless table-hover table-centered table-nowrap mb-0 border-top'>
                                        <thead className='pt-3'>
                                            {displayHead(
                                                tableContent.accountTransaction,
                                            )}
                                        </thead>
                                        <tbody>
                                            {displayBody(
                                                tableContent.accountTransaction,
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Pagelayout>
    );
}
