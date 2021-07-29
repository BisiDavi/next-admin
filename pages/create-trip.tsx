import { Pagelayout } from '@layouts/.';
import { displayHead, displayTableBody } from '@components/table';
import displayModal from '@utils/displayModal';
import tableContent from '../json/createTripTable.json';
import useModal from '../hooks/useModal';

export default function CreateOrders() {
    const { modal, modalHandler } = useModal();

    const modalContent = {
        title: 'Create Trip',
        show: modal,
        close: () => modalHandler(false),
    };
    return (
        <Pagelayout title='Create Trip'>
            <div className='row'>
                {displayModal('createTrip', modalContent)}
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='create-order position-relative'>
                        <div className='card'>
                            <h4 className='card-title mt-4 text-center'>
                                Create Trips
                            </h4>
                            <div className='card-body border-top'>
                                <p className='card-subtitle mb-4'></p>
                                <table
                                    id='state-saving-datatable'
                                    className='table activate-select dt-responsive nowrap'
                                >
                                    <thead>{displayHead(tableContent)}</thead>
                                    <tbody>
                                        {displayTableBody(
                                            'createTrip',
                                            tableContent,
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <button
                            className='btn createTrip btn-success waves-effect waves-light mt-5'
                            onClick={() => modalHandler(true)}
                        >
                            <i className='bx bx-plus bx-2'></i>
                            Create Trip
                        </button>
                    </div>
                </div>
                <style jsx>
                    {`
                        button.createTrip {
                            border-radius: 5px;
                            padding: 10px;
                        }
                    `}
                </style>
            </div>
        </Pagelayout>
    );
}
