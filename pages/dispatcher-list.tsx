import { Pagelayout } from '@layouts/.';

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
                                <table
                                    id='state-saving-datatable'
                                    className='table activate-select dt-responsive nowrap'
                                >
                                    <thead>
                                        <tr>
                                            <th>S/N</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Whatsapp</th>
                                            <th>Phone Number</th>
                                            <th>Fleet Brand</th>
                                            <th>Fleet Model</th>
                                            <th>Fleet Color</th>
                                            <th>Plate Number</th>
                                            <th>Owner</th>
                                            <th>Orders Completed</th>
                                            <th>Delete</th>
                                            <th>Deactivate</th>
                                            <th>View Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Joshua Ajayi</td>
                                            <td>ajayijoshua@gmail.com</td>
                                            <td>08123456782</td>
                                            <td>08123456782</td>
                                            <td>Bajaj</td>
                                            <td>B231z</td>
                                            <td>Red</td>
                                            <td>APP2314</td>
                                            <td>Kenny Adio</td>
                                            <td>20</td>
                                            <td>
                                                <button className='btn btn-danger'>
                                                    Delete
                                                </button>
                                            </td>
                                            <td>
                                                <button className='btn btn-warning'>
                                                    Deactivate{' '}
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
                                            <td>Tolani Ajayi</td>
                                            <td>tolani@gmail.com</td>
                                            <td>08123456782</td>
                                            <td>08123456782</td>
                                            <td>Suzuki</td>
                                            <td>B231z</td>
                                            <td>Red</td>
                                            <td>APP2314</td>
                                            <td>Tolani Adio</td>
                                            <td>20</td>
                                            <td>
                                                <button className='btn btn-danger'>
                                                    Delete
                                                </button>
                                            </td>
                                            <td>
                                                <button className='btn btn-warning'>
                                                    Deactivate{' '}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Pagelayout>
    );
}
