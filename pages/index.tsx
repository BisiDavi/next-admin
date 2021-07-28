import { Pagelayout } from '@layouts/.';


export default function Home() {
    return (
        <Pagelayout title='Welcome'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-3 col-md-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <i className='bx bx-layer float-right m-0 h2 text-muted'></i>
                                <h6 className='text-muted text-uppercase mt-0'>
                                    Pending Orders
                                </h6>
                                <h3 className='mb-3' data-plugin='counterup'>
                                    1,587
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-3 col-md-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <i className='bx bx-dollar-circle float-right m-0 h2 text-muted'></i>
                                <h6 className='text-muted text-uppercase mt-0'>
                                    Orders Today
                                </h6>
                                <h3 className='mb-3'>
                                    <span data-plugin='counterup'>46,782</span>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-3 col-md-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <i className='bx bx-bx bx-analyse float-right m-0 h2 text-muted'></i>
                                <h6 className='text-muted text-uppercase mt-0'>
                                    Orders This Week
                                </h6>
                                <h3 className='mb-3'>
                                    <span data-plugin='counterup'>15.9</span>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-3 col-md-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <i className='bx bx-basket float-right m-0 h2 text-muted'></i>
                                <h6 className='text-muted text-uppercase mt-0'>
                                    All Time
                                </h6>
                                <h3 className='mb-3' data-plugin='counterup'>
                                    1,890
                                </h3>
                            </div>
                        </div>
                    </div>
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
                                            <tr>
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
                                            </tr>
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
                                            <tr>
                                                <td className='text-truncate'>
                                                    2
                                                </td>
                                                <td className='text-truncate'>
                                                    Igba Samson
                                                </td>
                                                <td>10</td>
                                                <td>2</td>
                                                <td className='text-truncate'>
                                                    <span className='badge badge-soft-danger p-2'>
                                                        inactive
                                                    </span>
                                                </td>
                                                <td className='text-truncate'>
                                                    10
                                                </td>
                                                <td className='text-truncate'>
                                                    15
                                                </td>
                                                <td className='text-truncate'>
                                                    20
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='text-truncate'>
                                                    3
                                                </td>
                                                <td className='text-truncate'>
                                                    Igba Johnson
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
                                            <tr>
                                                <td className='text-truncate'>
                                                    4
                                                </td>
                                                <td className='text-truncate'>
                                                    Igba David
                                                </td>
                                                <td>10</td>
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
