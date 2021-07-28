import { Pagelayout } from '@layouts/.';
import {
    Input,
    createDispatcherFields,
    createAdminFields,
} from '@components/.';
export default function CreateProfile() {
    function displayField(fields, className) {
        return fields.map((input, index) => (
            <div key={index} className={className}>
                <Input data={input} />
            </div>
        ));
    }
    return (
        <Pagelayout title='Create Profile'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <h3 className='text-center text-primary'>
                        Create a Dispatcher Profile
                    </h3>
                    <form className='needs-validation px-4'>
                        <div className='form-group'>
                            <h5 className='text-primary'>Personal Info</h5>
                            <div className='row my-3'>
                                {displayField(
                                    createDispatcherFields.userInfo,
                                    'col-6 col-lg-6',
                                )}
                            </div>
                        </div>
                        <div className='row my-3 align-items-center'>
                            {displayField(
                                createDispatcherFields.userNumber,
                                'col-4 col-lg-4',
                            )}
                        </div>
                        <div className='form-group'>
                            <h5 className='text-primary'>Credentials</h5>
                            <div className='row my-3'>
                                {displayField(
                                    createDispatcherFields.userCredentials,
                                    'col-12 col-lg-4 col-md-4',
                                )}
                            </div>
                        </div>
                        <div className='form-group'>
                            <h5 className='text-primary'>Fleet Details</h5>
                            <div className='row my-3'>
                                {displayField(
                                    createDispatcherFields.fleetType,
                                    'col-6 col-lg-6',
                                )}
                            </div>
                            <div className='row my-3'>
                                {displayField(
                                    createDispatcherFields.fleetDetails,
                                    'col-12 col-lg-4 col-md-4',
                                )}
                            </div>
                        </div>
                        <button
                            className='btn btn-primary waves-effect waves-light'
                            type='submit'
                        >
                            Submit form
                        </button>
                    </form>
                </div>
                <div className='col-12 col-lg-6'>
                    <h3 className='text-center text-primary'>
                        Create an Admin Profile
                    </h3>
                    <form className='needs-validation px-4'>
                        <div className='form-group'>
                            <h5 className='text-primary'>Personal Info</h5>
                            <div className='row my-3'>
                                {displayField(
                                    createAdminFields.userInfo,
                                    'col-6 col-lg-6',
                                )}
                            </div>
                        </div>

                        <div className='row my-3 align-items-center'>
                            {displayField(
                                createAdminFields.userNumber,
                                'col-12 col-lg-4 col-md-4',
                            )}
                        </div>
                        <div className='form-group'>
                            <h5 className='text-primary'>Credentials</h5>
                            <div className='row my-3'>
                                {displayField(
                                    createAdminFields.userCredentials,
                                    'col-12 col-lg-4 col-md-4',
                                )}
                            </div>
                        </div>
                        <button
                            className='btn btn-primary waves-effect waves-light'
                            type='submit'
                        >
                            Submit form
                        </button>
                    </form>
                </div>
            </div>
        </Pagelayout>
    );
}
