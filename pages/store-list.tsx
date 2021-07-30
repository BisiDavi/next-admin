import { Table } from 'react-bootstrap';
import { Pagelayout } from '@layouts/.';
import { displayHead, displayTableBody } from '@components/table';
import tableContent from '../json/store-list.json';
import displayModal from '@utils/displayModal';
import useModal from '../hooks/useModal';

export default function Storelist() {
    const { modal, modalHandler } = useModal();

    const modalContent = {
        title: 'Create Store List',
        show: modal,
        close: () => modalHandler(false),
    };
    return (
        <Pagelayout title='Store List'>
            <div className='row'>
                {displayModal('createStoreList', modalContent)}
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='create-order position-relative'>
                        <div className='card'>
                            <h4 className='card-title mt-4 text-center'>
                                Store List
                            </h4>
                            <div className='card-body border-top'>
                                <Table hover responsive bordered striped>
                                    <thead>{displayHead(tableContent)}</thead>
                                    <tbody>
                                        {displayTableBody(
                                            'storeList',
                                            tableContent,
                                        )}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <button
                            className='btn storeList btn-success waves-effect waves-light'
                            onClick={() => modalHandler(true)}
                        >
                            <i className='fa fa-plus fx-2 mx-2'></i>
                            Create Trip
                        </button>
                    </div>
                </div>
                <style jsx>
                    {`
                        button.storeList {
                            border-radius: 5px;
                            padding: 10px;
                            margin-top: 50px;
                        }
                    `}
                </style>
            </div>
        </Pagelayout>
    );
}
