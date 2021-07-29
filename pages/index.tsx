import { Pagelayout } from '@layouts/.';
import { Card } from '@components/.';
import tableContent from '../json/index.json';
import { displayBody, displayHead } from '@components/table';

export default function Home() {
    const cards = [
        { title: 'Pending Orders', count: '1,587' },
        { title: 'Orders Today', count: '46,782' },
        { title: 'Average Orders This Week', count: '200' },
        { title: 'All Time', count: '1,800' },
    ];

    return (
        <Pagelayout title='Welcome'>
            <div className='container-fluid'>
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
                                <div className='dropdown float-right position-relative'>
                                    <a
                                        href='index.html#'
                                        className='dropdown-toggle h4 text-muted'
                                        data-toggle='dropdown'
                                        aria-expanded='false'
                                    >
                                        <i className='mdi mdi-dots-vertical'></i>
                                    </a>
                                    <ul className='dropdown-menu dropdown-menu-right'>
                                        <li>
                                            <a
                                                href='index.html#'
                                                className='dropdown-item'
                                            >
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='index.html#'
                                                className='dropdown-item'
                                            >
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='index.html#'
                                                className='dropdown-item'
                                            >
                                                Something else here
                                            </a>
                                        </li>
                                        <li className='dropdown-divider'></li>
                                        <li>
                                            <a
                                                href='index.html#'
                                                className='dropdown-item'
                                            >
                                                Separated link
                                            </a>
                                        </li>
                                    </ul>
                                </div>
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
                                <div className='dropdown float-right position-relative'>
                                    <a
                                        href='index.html#'
                                        className='dropdown-toggle h4 text-muted'
                                        data-toggle='dropdown'
                                        aria-expanded='false'
                                    >
                                        <i className='mdi mdi-dots-vertical'></i>
                                    </a>
                                    <ul className='dropdown-menu dropdown-menu-right'>
                                        <li>
                                            <a
                                                href='index.html#'
                                                className='dropdown-item'
                                            >
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='index.html#'
                                                className='dropdown-item'
                                            >
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='index.html#'
                                                className='dropdown-item'
                                            >
                                                Something else here
                                            </a>
                                        </li>
                                        <li className='dropdown-divider'></li>
                                        <li>
                                            <a
                                                href='index.html#'
                                                className='dropdown-item'
                                            >
                                                Separated link
                                            </a>
                                        </li>
                                    </ul>
                                </div>
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
                                <div className='dropdown float-right position-relative'>
                                    <a
                                        href='index.html#'
                                        className='dropdown-toggle h4 text-muted'
                                        data-toggle='dropdown'
                                        aria-expanded='false'
                                    >
                                        <i className='mdi mdi-dots-vertical'></i>
                                    </a>
                                    <ul className='dropdown-menu dropdown-menu-right'>
                                        <li>
                                            <a
                                                href='index.html#'
                                                className='dropdown-item'
                                            >
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='index.html#'
                                                className='dropdown-item'
                                            >
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='index.html#'
                                                className='dropdown-item'
                                            >
                                                Something else here
                                            </a>
                                        </li>
                                        <li className='dropdown-divider'></li>
                                        <li>
                                            <a
                                                href='index.html#'
                                                className='dropdown-item'
                                            >
                                                Separated link
                                            </a>
                                        </li>
                                    </ul>
                                </div>
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
                                <h4 className='card-title overflow-hidden'>
                                    Dispatcher Status
                                </h4>
                                <div className='table-responsive'>
                                    <table
                                        className='table table-centered table-hover table-xl mb-0'
                                        id='recent-orders'
                                    >
                                        <thead>
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
                                <h4 className='card-title overflow-hidden'>
                                    Account Transactions
                                </h4>
                                <div className='table-responsive'>
                                    <table className='table table-borderless table-hover table-centered table-nowrap mb-0'>
                                        <thead>
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
