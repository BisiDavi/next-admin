import { Formik } from 'formik';
import { InputField, createTripFields } from '@components/.';
import { inputValue } from '@utils/.';

export default function CreateTripForm({ onClose }: createTripProps) {
    return (
        <Formik
            initialValues={{
                pickupVendor: '',
                pickupDescription: '',
                pickupContact: '',
                deliveryAddress: '',
                phoneNumber: '',
                note: '',
                author: '',
            }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                errors,
            }: formValues) => (
                <form onSubmit={handleSubmit} className='needs-validation px-4'>
                    <div className='form-group'>
                        <h5 className='text-primary'>Personal Info</h5>
                        <div className='row my-3'>
                            <InputField
                                fields={createTripFields.fields}
                                className='col-6 col-lg-6 mt-2'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errors={errors}
                                value={
                                    values[inputValue(createTripFields.fields)]
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
            )}
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
        deliveryAddress: string;
        phoneNumber: string;
        note: string;
        author: string;
    };
    handleBlur: () => void;
    errors: {
        name: string;
    };
}

interface createTripProps {
    onClose: () => void;
}
