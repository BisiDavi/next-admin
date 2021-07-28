export default function Login() {
    return (
        <div className='login-page'>
            <div className='card'>
                <div className='card-body'>
                    <div className='text-center mb-4 mt-3'>
                        <a href='#'>
                            <span>
                                <h1>InstaDrop</h1>
                            </span>
                        </a>
                    </div>
                    <form method='post' className='p-2'>
                        <h4 className='text-center mb-4'>
                            Sign in to your account
                        </h4>
                        <div className='form-group'>
                            <label htmlFor='emailaddress'>Email address</label>
                            <input
                                className='form-control'
                                type='email'
                                name='email'
                                id='emailaddress'
                                required
                                placeholder='john@deo.com'
                            />
                        </div>
                        <div className='form-group'>
                            <a
                                href='/recover-password'
                                className='text-muted float-right'
                            >
                                Forgot your password?
                            </a>
                            <label htmlFor='password'>Password</label>
                            <input
                                className='form-control'
                                type='password'
                                name='password'
                                required
                                id='password'
                                placeholder='Enter your password'
                            />
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
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-sm-12 text-center'>
                    <p className='text-white-50 mb-0'>
                        Powered by CloudMall Africa
                    </p>
                </div>
            </div>
        </div>
    );
}
