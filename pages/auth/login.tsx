import LoginForm from '@components/forms/loginForm';
import { getTokenValid } from '@components/requests';

export default function Login() {
    getTokenValid();

    return (
        <div className='login-page  d-flex align-items-center'>
            <div className='login-here justify-content-center p-3 mx-auto d-flex align-items-center flex-column bg-white'>
                <div className='text-center mb-4 mt-3'>
                    <span>
                        <h1>InstaDrop</h1>
                    </span>
                </div>
                <LoginForm />
                <div className='row mt-4'>
                    <div className='col-sm-12 text-center'>
                        <p className='text-white-50 mb-0'>
                            Powered by CloudMall Africa
                        </p>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .login-page {
                        background-color: rgb(52, 110, 224);
                        height: 100vh;
                        width: 100%;
                    }
                    .login-here {
                        border-radius: 10px;
                    }
                `}
            </style>
        </div>
    );
}
