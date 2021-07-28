import { Pagelayout } from '@layouts/.';

export default function CreateOrders() {
    return (
        <Pagelayout title='Active Order'>
            <div className='row'>
                <div className='col-12'>
                    <div
                        style={{ height: '80vh' }}
                        className='create-order position-relative'
                    >
                        <div className='card'>
                            <div className='card-body'>
                                <h4 className='card-title'></h4>
                                <p className='card-subtitle mb-4'></p>
                                <table
                                    id='state-saving-datatable'
                                    className='table activate-select dt-responsive nowrap'
                                >
                                    <thead>
                                        <tr>
                                            <th>S/N</th>
                                            <th>Pickup Vendor</th>
                                            <th>Pickup Description</th>
                                            <th>Pickup Contact</th>
                                            <th>Delivery Address</th>
                                            <th>Phone Number</th>
                                            <th>Note</th>
                                            <th>Author</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Kitchen Royal</td>
                                            <td>Damico</td>
                                            <td>07012345678</td>
                                            <td>Maintenance</td>
                                            <td>07012345678</td>
                                            <td>Bring it hot</td>
                                            <td>Joshua</td>
                                            <td>8:30 am 20/07/21</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Kitchen Royal</td>
                                            <td>Damico</td>
                                            <td>07012345678</td>
                                            <td>Maintenance</td>
                                            <td>07012345678</td>
                                            <td>Bring it hot</td>
                                            <td>Joshua</td>
                                            <td>8:30 am 20/07/21</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div
                                    className='modal fade bd-example-modal-lg'
                                    tabIndex={-1}
                                    role='dialog'
                                    aria-labelledby='myLargeModalLabel'
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
                                                    id='exampleModalLabel'
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
                                                            <label htmlFor='pickupVendor'>
                                                                Pickup Vendor
                                                            </label>
                                                            <input
                                                                type='text'
                                                                className='form-control'
                                                                id='pickupVendor'
                                                                placeholder='Pickup Vendor'
                                                                value=''
                                                            />
                                                        </div>
                                                        <div className='col-6'>
                                                            <label htmlFor='pickupContact'>
                                                                Pickup Contact
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
                                                                Delivery Address
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
                                                                Phone Number
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
                                                                Number of
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
                        <button
                            style={{
                                borderRadius: '50%',
                                padding: '20px',
                                right: '30px',
                                bottom: '30px',
                            }}
                            className='btn btn-warning waves-effect waves-light position-absolute'
                            data-toggle='modal'
                            data-target='.bd-example-modal-lg'
                        >
                            <i className='bx bx-plus bx-2'></i>
                        </button>
                    </div>
                </div>
            </div>
        </Pagelayout>
    );
}
