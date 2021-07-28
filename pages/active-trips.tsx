import { Pagelayout } from '@layouts/.';

export default function ActiveOrder() {
    return (
        <Pagelayout title='Active Order'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div
                            style={{ height: '50vh' }}
                            className='create-order position-relative'
                        >
                            <div className='card'>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    className='card-title position-relative'
                                >
                                    <h4 className='text-center'>
                                        Available Orders
                                    </h4>
                                </div>
                                <div className='card-body'>
                                    <table
                                        id='state-saving-datatable'
                                        className='table activate-select dt-responsive nowrap'
                                    >
                                        <thead>
                                            <tr>
                                                <th>S/N</th>
                                                <th>Date</th>
                                                <th>Order Number</th>
                                                <th>Pickup</th>
                                                <th>Destination</th>
                                                <th>Number of Destination</th>
                                                <th>Time Created</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>20/05/21</td>
                                                <td>A10</td>
                                                <td>Kitchen Royal</td>
                                                <td>Maintenance</td>
                                                <td>20</td>
                                                <td>8:30 am</td>
                                                <td>
                                                    <button className='btn btn-danger'>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>20/05/21</td>
                                                <td>A10</td>
                                                <td>Kitchen Royal</td>
                                                <td>Maintenance</td>
                                                <td>20</td>
                                                <td>8:30 am</td>
                                                <td>
                                                    <button className='btn btn-danger'>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div
                                        className='modal fade bd-availableOrders-modal-lg'
                                        tabIndex={-1}
                                        role='dialog'
                                        aria-labelledby='availableOrders'
                                        aria-hidden='true'
                                    >
                                        <div
                                            className='modal-dialog modal-lg'
                                            role='document'
                                        >
                                            <div className='modal-content'>
                                                <div className='modal-header'>
                                                    <h5
                                                        className='modal-title text-center w-100'
                                                        id='createOrders'
                                                    >
                                                        Create Orders
                                                    </h5>
                                                    <button
                                                        type='button'
                                                        className='close waves-effect waves-light'
                                                        data-dismiss='modal'
                                                        aria-label='Close'
                                                    >
                                                        <span aria-hidden='true'>
                                                            &times;
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className='modal-body'>
                                                    <form>
                                                        <div className='form-row my-3'>
                                                            <div className='col-12'>
                                                                <label htmlFor='pickupOrdrer'>
                                                                    Pickup
                                                                </label>
                                                                <input
                                                                    type='text'
                                                                    className='form-control'
                                                                    id='pickupOrdrer'
                                                                    placeholder='Pickup'
                                                                    value=''
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='form-row my-3'>
                                                            <div className='col-12'>
                                                                <label htmlFor='orderDestination'>
                                                                    {' '}
                                                                    Destination
                                                                </label>
                                                                <input
                                                                    type='text'
                                                                    className='form-control'
                                                                    id='orderDestination'
                                                                    placeholder='Destination'
                                                                    value=''
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='form-row my-3'>
                                                            <div className='col-12'>
                                                                <label htmlFor='numberofDestination'>
                                                                    Number of
                                                                    Destination
                                                                </label>
                                                                <input
                                                                    type='text'
                                                                    className='form-control'
                                                                    id='numberofDestination'
                                                                    placeholder='Number of Destination'
                                                                    value=''
                                                                />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className='modal-footer'>
                                                    <button
                                                        type='button'
                                                        className='btn btn-secondary waves-effect waves-light'
                                                        data-dismiss='modal'
                                                    >
                                                        Close
                                                    </button>
                                                    <button
                                                        type='button'
                                                        className='btn btn-primary waves-effect waves-light'
                                                    >
                                                        Save changes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div
                                style={{ height: '50vh' }}
                                className='create-order position-relative'
                            >
                                <div className='card'>
                                    <div
                                        style={{
                                            height: '60px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        className='card-title position-relative'
                                    >
                                        <h4 className='text-center'>
                                            Orders in Progress
                                        </h4>
                                    </div>
                                    <div className='card-body'>
                                        <table
                                            id='state-saving-datatable'
                                            className='table activate-select dt-responsive nowrap'
                                        >
                                            <thead>
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>Date</th>
                                                    <th>Order Number</th>
                                                    <th>Pickup</th>
                                                    <th>Destination</th>
                                                    <th>
                                                        Number of Destination
                                                    </th>
                                                    <th>Time Created</th>
                                                    <th>Time Accepted</th>
                                                    <th>Dispatcher Name</th>
                                                    <th>Cancel</th>
                                                    <th>View Location</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>2021/12/06</td>
                                                    <td>B102</td>
                                                    <td>Kitchen Royal</td>
                                                    <td>Maintenance</td>
                                                    <td>60</td>
                                                    <td>8:30 am </td>
                                                    <td>10:30 am</td>
                                                    <td>Cole</td>
                                                    <td>
                                                        <button className='btn btn-danger'>
                                                            Cancel
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-success'>
                                                            View Location
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>2021/12/06</td>
                                                    <td>B102</td>
                                                    <td>Kitchen Royal</td>
                                                    <td>Maintenance</td>
                                                    <td>60</td>
                                                    <td>3:30 pm </td>
                                                    <td>5:30 pm</td>
                                                    <td>Cole</td>
                                                    <td>
                                                        <button className='btn btn-danger'>
                                                            Cancel
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-success'>
                                                            View Location
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div
                                            className='modal fade bd-orderInProgress-modal-lg'
                                            tabIndex={-1}
                                            role='dialog'
                                            aria-labelledby='orderInProgressModal'
                                            aria-hidden='true'
                                        >
                                            <div
                                                className='modal-dialog modal-lg'
                                                role='document'
                                            >
                                                <div className='modal-content'>
                                                    <div className='modal-header'>
                                                        <h5
                                                            className='modal-title text-center w-100'
                                                            id='orderInProgressTitle'
                                                        >
                                                            Create Orders
                                                        </h5>
                                                        <button
                                                            type='button'
                                                            className='close waves-effect waves-light'
                                                            data-dismiss='modal'
                                                            aria-label='Close'
                                                        >
                                                            <span aria-hidden='true'>
                                                                &times;
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div className='modal-body'>
                                                        <form>
                                                            <div className='form-row my-3'>
                                                                <div className='col-6'>
                                                                    <label htmlFor='pickup'>
                                                                        Pickup
                                                                    </label>
                                                                    <input
                                                                        type='text'
                                                                        className='form-control'
                                                                        id='pickup'
                                                                        placeholder='Pickup'
                                                                        value=''
                                                                    />
                                                                </div>
                                                                <div className='col-6'>
                                                                    <label htmlFor='pickupContact'>
                                                                        Pickup
                                                                        Contact
                                                                    </label>
                                                                    <input
                                                                        type='text'
                                                                        className='form-control'
                                                                        id='pickupContact'
                                                                        placeholder='Pickup Contact'
                                                                        value=''
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='form-ro my-3'>
                                                                <div className='col-12'>
                                                                    <label htmlFor='pickupVendor'>
                                                                        Pickup
                                                                        Description
                                                                    </label>
                                                                    <input
                                                                        type='text'
                                                                        className='form-control'
                                                                        id='pickupDescription'
                                                                        placeholder='Pickup Description'
                                                                        value=''
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='form-row my-3 align-items-center'>
                                                                <div className='col-6'>
                                                                    <label htmlFor='deliveryDetails'>
                                                                        Delivery
                                                                        Address
                                                                    </label>
                                                                    <input
                                                                        type='text'
                                                                        className='form-control'
                                                                        id='deliveryAddress'
                                                                        placeholder='Delivery Address'
                                                                        value=''
                                                                    />
                                                                </div>
                                                                <div className='col-5'>
                                                                    <label htmlFor='deliveryDetails'>
                                                                        Phone
                                                                        Number
                                                                    </label>
                                                                    <input
                                                                        type='text'
                                                                        className='form-control'
                                                                        id='phoneNumber'
                                                                        placeholder='Phone Number'
                                                                        value=''
                                                                    />
                                                                </div>
                                                                <div className='col-1'>
                                                                    <button
                                                                        type='button'
                                                                        className='btn btn-primary waves-effect waves-light mt-4'
                                                                    >
                                                                        <i className='bx bx-plus'></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className='form-row my-3'>
                                                                <div className='col-12'>
                                                                    <label htmlFor='note'>
                                                                        Note
                                                                    </label>
                                                                    <input
                                                                        type='text'
                                                                        className='form-control'
                                                                        id='note'
                                                                        placeholder='Note'
                                                                        value=''
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='form-row my-3'>
                                                                <div className='col-6'>
                                                                    <label htmlFor='deliveryNumber'>
                                                                        Number
                                                                        of
                                                                        Deliveries
                                                                    </label>
                                                                    <input
                                                                        type='text'
                                                                        className='form-control'
                                                                        id='deliveryNumber'
                                                                        placeholder='Number of Deliveries'
                                                                        value=''
                                                                    />
                                                                </div>
                                                                <div className='col-6'>
                                                                    <label htmlFor='author'>
                                                                        Admin
                                                                    </label>
                                                                    <input
                                                                        type='text'
                                                                        className='form-control'
                                                                        id='admin'
                                                                        placeholder='Admin'
                                                                        value=''
                                                                    />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className='modal-footer'>
                                                        <button
                                                            type='button'
                                                            className='btn btn-secondary waves-effect waves-light'
                                                            data-dismiss='modal'
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            type='button'
                                                            className='btn btn-primary waves-effect waves-light'
                                                        >
                                                            Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Pagelayout>
    );
}
