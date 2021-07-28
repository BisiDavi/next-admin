import { Pagelayout } from '@layouts/.';
import { Card } from '@components/.';

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

                <div className='row'>
                    <div className='col-xl-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='dropdown float-right position-relative'>
                                    <a
                                        href='#'
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

                                <h4 className='card-title overflow-hidden'>
                                    Dispatcher Status
                                </h4>
                                <div className='table-responsive'>
                                    <table
                                        className='table table-centered table-hover table-xl mb-0'
                                        id='recent-orders'
                                    >
                                        <thead>
                                            <th className='border-top-0'>
                                                S/N
                                            </th>
                                            <th className='border-top-0'>
                                                Dispatcher Name
                                            </th>
                                            <th className='border-top-0'>
                                                Completed Orders
                                            </th>
                                            <th className='border-top-0'>
                                                Bonus Orders
                                            </th>
                                            <th className='border-top-0'>
                                                Status
                                            </th>
                                            <th className='border-top-0'>
                                                Active Orders
                                            </th>
                                            <th className='border-top-0'>
                                                Total Destination
                                            </th>
                                            <th className='border-top-0'>
                                                Avg. Delivery Time
                                            </th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='text-truncate'>
                                                    1
                                                </td>
                                                <td className='text-truncate'>
                                                    Igba Joshua
                                                </td>
                                                <td>20</td>
                                                <td>5</td>
                                                <td className='text-truncate'>
                                                    <span className='badge badge-soft-success p-2'>
                                                        active
                                                    </span>
                                                </td>
                                                <td className='text-truncate'>
                                                    20
                                                </td>
                                                <td className='text-truncate'>
                                                    10
                                                </td>
                                                <td className='text-truncate'>
                                                    15
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='dropdown float-right position-relative'>
                                    <a
                                        href='#'
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

                                <h4 className='card-title overflow-hidden'>
                                    Account Transactions
                                </h4>
                                <div className='table-responsive'>
                                    <table className='table table-borderless table-hover table-centered table-nowrap mb-0'>
                                        <thead>
                                            <th>S/N</th>
                                            <th>Store Name</th>
                                            <th>Orders</th>
                                            <th>Average Destination</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h5 className='font-size-15 mb-1 font-weight-normal'>
                                                        1
                                                    </h5>
                                                    <span className='text-muted font-size-12'>
                                                        11 July 2021
                                                    </span>
                                                </td>
                                                <td>
                                                    <h5 className='font-size-15 mb-1 font-weight-normal'>
                                                        Kitchen Royale
                                                    </h5>
                                                </td>
                                                <td>
                                                    <h5 className='font-size-17 mb-1 font-weight-normal'>
                                                        20
                                                    </h5>
                                                </td>
                                                <td>
                                                    <h5 className='font-size-15 mb-1 font-weight-normal'>
                                                        20
                                                    </h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5 className='font-size-15 mb-1 font-weight-normal'>
                                                        2
                                                    </h5>
                                                    <span className='text-muted font-size-12'>
                                                        11 July 2021
                                                    </span>
                                                </td>
                                                <td>
                                                    <h5 className='font-size-15 mb-1 font-weight-normal'>
                                                        Kitchen Royale
                                                    </h5>
                                                </td>
                                                <td>
                                                    <h5 className='font-size-17 mb-1 font-weight-normal'>
                                                        20
                                                    </h5>
                                                </td>
                                                <td>
                                                    <h5 className='font-size-15 mb-1 font-weight-normal'>
                                                        20
                                                    </h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5 className='font-size-15 mb-1 font-weight-normal'>
                                                        3
                                                    </h5>
                                                    <span className='text-muted font-size-12'>
                                                        11 July 2021
                                                    </span>
                                                </td>
                                                <td>
                                                    <h5 className='font-size-15 mb-1 font-weight-normal'>
                                                        Kitchen Royale
                                                    </h5>
                                                </td>
                                                <td>
                                                    <h5 className='font-size-17 mb-1 font-weight-normal'>
                                                        20
                                                    </h5>
                                                </td>
                                                <td>
                                                    <h5 className='font-size-15 mb-1 font-weight-normal'>
                                                        20
                                                    </h5>
                                                </td>
                                            </tr>
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
