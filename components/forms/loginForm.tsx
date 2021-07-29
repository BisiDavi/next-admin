import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { inputValue } from '@utils/.';
import { InputField, loginFields, Loading } from '@components/.';
import { setAuthToken, postRequest } from '@components/requests/.';
import { useLoading, useLocalStorage } from '../../hooks';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {
    const { loading, loadingState } = useLoading();
    const router = useRouter();
    const { setStorage } = useLocalStorage();

    function userRole(user) {
        if (user.isSuperAdmin) {
            return `Welcome back, Super Admin ${user.firstName}`;
        }
        return;
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(values, actions) => {
                loadingState(true);
                console.log('actions', actions);
                postRequest('/login', values)
                    .then((response) => {
                        console.log('response', response);
                        response.data.data === undefined &&
                            toast.error(response.data?.message);
                        if (response.data?.token) {
                            toast.success(userRole(response.data.data)),
                                setAuthToken(response.data?.token);
                            setStorage('currentUser', response.data?.data);

                            router.push('/');
                        }

                        loadingState(false);
                    })
                    .catch((error) => {
                        console.log('error', error);
                        toast.error('An error just occured');
                        loadingState(false);
                    });
                actions.setSubmitting(false);
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                errors,
            }: formValues) => (
                <>
                    {Boolean(loading) && <Loading />}
                    <ToastContainer />
                    <form
                        onSubmit={handleSubmit}
                        className='needs-validation px-4'
                    >
                        <h4 className='text-center mb-4'>
                            Sign in to your account
                        </h4>
                        <div className='form-group'>
                            <div className='row my-3'>
                                <InputField
                                    fields={loginFields.fields}
                                    className='col-12 col-lg-12 mt-2'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errors={errors}
                                    value={
                                        values[inputValue(loginFields.fields)]
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div className='mb-3 text-center'>
                            <button
                                className='btn btn-primary btn-block'
                                type='submit'
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </>
            )}
        </Formik>
    );
}

interface formValues {
    handleSubmit: () => void;
    handleChange: () => void;
    values: {
        email: string;
        password: string;
    };
    handleBlur: () => void;
    errors: {
        name: string;
    };
}
