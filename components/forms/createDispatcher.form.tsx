import { toast } from 'react-toastify';

import { Formik } from 'formik';
import { InputField, Loading, createDispatcherFields } from '@components/.';
import { inputValue } from '@utils/.';
import { postRequest } from '@components/requests';
import { useLoading } from '@hooks/.';

export default function CreateDispatcherForm() {
    const { loading, loadingState } = useLoading();

    function createDispatcher(dispatcherData) {
        loadingState(true);
        postRequest('/dispatchers', JSON.stringify(dispatcherData))
            .then((response) => {
                console.log('response', response);
                toast.success('Dispatcher successfully created');
                loadingState(false);
            })
            .catch((error) => {
                console.error('error', error);
                toast.error('error in creating dispatcher');
                loadingState(false);
            });
    }
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                whatsappNumber: '',
                userName: '',
                password: '',
                fleetBrand: '',
                fleetModel: '',
                fleetColor: '',
                fleetPlateNumber: '',
                fleetOwner: '',
            }}
            onSubmit={(values, actions) => {
                alert(JSON.stringify(values, null, 2));
                createDispatcher(values);
                actions.setSubmitting(false);
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                errors,
            }: formValues) => {
                return (
                    <>
                        {Boolean(loading) && <Loading />}
                        <form
                            onSubmit={handleSubmit}
                            className='needs-validation px-4'
                        >
                            <div className='form-group'>
                                <h5 className='text-primary'>Personal Info</h5>
                                <div className='row my-3'>
                                    <InputField
                                        fields={createDispatcherFields.userInfo}
                                        className='col-6 col-lg-6'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errors={errors}
                                        value={
                                            values[
                                                inputValue(
                                                    createDispatcherFields.userInfo,
                                                )
                                            ]
                                        }
                                    />
                                </div>
                            </div>
                            <div className='row my-3 align-items-center'>
                                <InputField
                                    fields={createDispatcherFields.userNumber}
                                    className='col-4 col-lg-4'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errors={errors}
                                    value={
                                        values[
                                            inputValue(
                                                createDispatcherFields.userInfo,
                                            )
                                        ]
                                    }
                                />
                            </div>
                            <div className='form-group'>
                                <h5 className='text-primary'>Credentials</h5>
                                <div className='row my-3'>
                                    <InputField
                                        fields={
                                            createDispatcherFields.userCredentials
                                        }
                                        className='col-12 col-lg-4 col-md-4'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errors={errors}
                                        value={
                                            values[
                                                inputValue(
                                                    createDispatcherFields.userCredentials,
                                                )
                                            ]
                                        }
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <h5 className='text-primary'>Fleet Details</h5>
                                <div className='row my-3'>
                                    <InputField
                                        fields={
                                            createDispatcherFields.fleetType
                                        }
                                        className='col-6 col-lg-6'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errors={errors}
                                        value={
                                            values[
                                                inputValue(
                                                    createDispatcherFields.fleetType,
                                                )
                                            ]
                                        }
                                    />
                                </div>
                                <div className='row my-3'>
                                    <InputField
                                        fields={
                                            createDispatcherFields.fleetDetails
                                        }
                                        className='col-12 col-lg-4 col-md-4'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errors={errors}
                                        value={
                                            values[
                                                inputValue(
                                                    createDispatcherFields.fleetDetails,
                                                )
                                            ]
                                        }
                                    />
                                </div>
                            </div>
                            <button
                                className='btn btn-primary waves-effect waves-light'
                                type='submit'
                            >
                                Submit form
                            </button>
                        </form>
                    </>
                );
            }}
        </Formik>
    );
}

interface formValues {
    handleSubmit: () => void;
    handleChange: () => void;
    values: {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        whatsappNumber: string;
        userName: string;
        password: string;
        confirmPassword: string;
        fleetBrand: string;
        fleetModel: string;
        fleetColor: string;
        fleetPlateNumber: string;
        fleetOwner: string;
    };
    handleBlur: () => void;
    errors: {
        name: string;
    };
}
