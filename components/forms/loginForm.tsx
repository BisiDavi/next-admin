import { Formik } from 'formik';
import { InputField, loginFields } from '@components/.';
import { inputValue } from '@utils/.';

export default function LoginForm() {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
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
                                value={values[inputValue(loginFields.fields)]}
                                required
                            />
                        </div>
                    </div>
                    <div className='form-group mb-4 pb-3'>
                        <div className='custom-control custom-checkbox checkbox-primary'>
                            <input
                                type='checkbox'
                                className='custom-control-input'
                                id='checkbox-signin'
                            />
                            <label
                                className='custom-control-label'
                                htmlFor='checkbox-signin'
                            >
                                Remember me
                            </label>
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
