import { Table } from 'react-bootstrap';
import { displayHead, displayTableBody } from '@components/table';
import { Pagelayout } from '@layouts/.';
import tableContent from '../json/dispatcherList.json';

export default function DispatcherList() {
    return (
        <Pagelayout title='Dispatcher List'>
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
                                <Table hover responsive bordered striped>
                                    <thead>
                                        <tr>{displayHead(tableContent)}</tr>
                                    </thead>
                                    <tbody>
                                        {displayTableBody(
                                            'dispatcherTrip',
                                            tableContent,
                                        )}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Pagelayout>
    );
}
