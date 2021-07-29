import { Pagelayout } from '@layouts/.';
import { displayHead, displayTableBody } from '@components/table';
import tableContent from '../json/tripHistoryTable.json';

export default function Triphistory() {
    return (
        <Pagelayout title='Trip History'>
            <div className='row'>
                <div className='col-12'>
                    <div className='create-order position-relative'>
                        <div className='card'>
                            <div className='d-flex justify-content-center align-items-center card-title position-relative'></div>
                            <div className='card-body'>
                                <table
                                    id='state-saving-datatable'
                                    className='table activate-select dt-responsive nowrap'
                                >
                                    <thead>{displayHead(tableContent)}</thead>
                                    <tbody>
                                        {displayTableBody(
                                            'tripHistory',
                                            tableContent,
                                        )}
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
        </Pagelayout>
    );
}
