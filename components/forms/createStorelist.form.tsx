import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { InputField, Loading, createStoreListFields } from '@components/.';
import { inputValue } from '@utils/.';
import { postRequest } from '@components/requests';
import { useLoading } from '@hooks/.';

export default function CreateStoreListForm({ onClose }: createTripProps) {
    const { loading, loadingState } = useLoading();

    function createStore(storeData) {
        loadingState(true);
        postRequest('/stores', JSON.stringify(storeData))
            .then((response) => {
                console.log('response', response);
                toast.success('Store successfully created');
                loadingState(false);
            })
            .catch((error) => {
                console.error('error', error);
                toast.error('error in creating Store');
                loadingState(false);
            });
    }
    return (
        <Formik
            initialValues={{
                vendorName: '',
                email: '',
                whatsapp: '',
                phoneNumber: '',
                ordersCreated: '',
            }}
            onSubmit={(values, actions) => {
                createStore(values);
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
                                        fields={createStoreListFields.fields}
                                        className='col-6 col-lg-6 mt-2'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errors={errors}
                                        value={
                                            values[
                                                inputValue(
                                                    createStoreListFields.fields,
                                                )
                                            ]
                                        }
                                    />
                                </div>
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
        name: string;
        email: string;
        whatsapp: string;
        phoneNumber: string;
        ordersCreated: string;
    };
    handleBlur: () => void;
    errors: {
        name: string;
    };
}

interface createTripProps {
    onClose: () => void;
}
