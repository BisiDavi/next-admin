import { toast } from 'react-toastify';
import { Formik, Field, ErrorMessage, FieldArray } from 'formik';
import { InputField, Loading, createTripFields } from '@components/.';

import { postRequest } from '@components/requests';
import { useLoading } from '@hooks/.';
import { inputValue } from '@utils/.';

export default function CreateTripForm({ onClose }: createTripProps) {
    const { loading, loadingState } = useLoading();

    function createTrip(createTripData) {
        loadingState(true);
        postRequest('/orders', JSON.stringify(createTripData))
            .then((response) => {
                console.log('response', response);
                toast.success('Trip successfully created');
                loadingState(false);
            })
            .catch((error) => {
                console.error('error', error);
                toast.error('error in creating trip');
                loadingState(false);
            });
    }
    return (
        <Formik
            initialValues={{
                pickupVendor: '',
                pickupDescription: '',
                pickupContact: '',
                note: '',
                admin: '',
                details: [{ deliveryAddress: '', phoneNumber: '' }],
            }}
            onSubmit={(values, actions) => {
                console.log('values', values);
                createTrip(values);
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
                                        fields={createTripFields.fields}
                                        className='col-6 col-lg-6 mt-2'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errors={errors}
                                        required
                                        value={
                                            values[
                                                inputValue(
                                                    createTripFields.fields,
                                                )
                                            ]
                                        }
                                    />
                                </div>
                                <FieldArray name='details'>
                                    {({ insert, remove, push }) => (
                                        <>
                                            {values.details.length > 0 &&
                                                values.details.map(
                                                    (details, index) => (
                                                        <div
                                                            key={index}
                                                            className='row my-2 align-items-center'
                                                        >
                                                            <div className='d-flex flex-column col-5 col-lg-5 mt-2'>
                                                                <label
                                                                    htmlFor={`details.${index}.deliveryAddress`}
                                                                >
                                                                    Delivery
                                                                    Address
                                                                </label>
                                                                <Field
                                                                    className='form-control'
                                                                    name={`details.${index}.deliveryAddress`}
                                                                    placeholder='Delivery Address'
                                                                    required
                                                                />
                                                                <ErrorMessage
                                                                    name={`details.${index}.deliveryAddress`}
                                                                    component='div'
                                                                    className='field-error'
                                                                />
                                                            </div>
                                                            <div className='d-flex flex-column col-5 col-lg-5 mt-2'>
                                                                <label
                                                                    htmlFor={`details.${index}.phoneNumber`}
                                                                >
                                                                    Phone Number
                                                                </label>
                                                                <Field
                                                                    className='form-control'
                                                                    name={`details.${index}.phoneNumber`}
                                                                    placeholder='Phone Number'
                                                                    required
                                                                />
                                                                <ErrorMessage
                                                                    name={`details.${index}.phoneNumber`}
                                                                    component='div'
                                                                    className='field-error'
                                                                />
                                                            </div>
                                                            <div className='button-group d-flex align-items-center col-2 mt-4'>
                                                                <button
                                                                    type='button'
                                                                    onClick={() =>
                                                                        push({
                                                                            deliveryAddress:
                                                                                '',
                                                                            phoneNumber:
                                                                                '',
                                                                        })
                                                                    }
                                                                    className='btn btn-success mx-2 mt-2'
                                                                >
                                                                    <i className='fa fa-plus'></i>
                                                                </button>
                                                                <button
                                                                    type='button'
                                                                    onClick={() =>
                                                                        remove(
                                                                            index,
                                                                        )
                                                                    }
                                                                    className='btn btn-danger mx-3 mt-2'
                                                                >
                                                                    <i className='fa fa-minus'></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ),
                                                )}
                                        </>
                                    )}
                                </FieldArray>
                            </div>
                            <span className='d-flex justify-content-between mt-5 align-items-center'>
                                <button
                                    type='button'
                                    className='btn btn-danger waves-effect waves-light'
                                    data-dismiss='modal'
                                    onClick={onClose}
                                >
                                    Discard
                                </button>
                                <button
                                    type='submit'
                                    className='btn btn-primary waves-effect waves-light'
                                >
                                    Submit
                                </button>
                            </span>
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
        pickupVendor: string;
        pickupDescription: string;
        pickupContact: string;
        note: string;
        author: string;
        details: [{ deliveryAddress: string; phoneNumber: string }];
    };
    handleBlur: () => void;
    errors: {
        name: string;
    };
}

interface createTripProps {
    onClose: () => void;
}
