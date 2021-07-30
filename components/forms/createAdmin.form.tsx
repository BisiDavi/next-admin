import { toast } from 'react-toastify';
import { postRequest } from '@components/requests';
import { useLoading } from '@hooks/.';
import { Formik } from 'formik';
import { InputField, Loading, createAdminFields } from '@components/.';
import { inputValue } from '@utils/.';

export default function CreateAdminForm() {
    const { loading, loadingState } = useLoading();

    function CreateAdmin(adminData) {
        loadingState(true);
        postRequest('/admins', JSON.stringify(adminData))
            .then((response) => {
                console.log('response', response);
                toast.success('Admin successfully created');
                loadingState(false);
            })
            .catch((error) => {
                console.error('error', error);
                toast.error('error in creating Admin');
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
                confirmPassword: '',
            }}
            onSubmit={(values, actions) => {
                CreateAdmin(values);
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
                                        fields={createAdminFields.userInfo}
                                        className='col-6 col-lg-6'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errors={errors}
                                        required
                                        value={
                                            values[
                                                inputValue(
                                                    createAdminFields.userInfo,
                                                )
                                            ]
                                        }
                                    />
                                </div>
                            </div>

                            <div className='row my-3 align-items-center'>
                                <InputField
                                    fields={createAdminFields.userNumber}
                                    className='col-12 col-lg-4 col-md-4'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errors={errors}
                                    value={
                                        values[
                                            inputValue(
                                                createAdminFields.userNumber,
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
                                            createAdminFields.userCredentials
                                        }
                                        className='col-12 col-lg-4 col-md-4'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errors={errors}
                                        required
                                        value={
                                            values[
                                                inputValue(
                                                    createAdminFields.userCredentials,
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
    };
    handleBlur: () => void;
    errors: {
        name: string;
    };
}
