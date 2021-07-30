import { Pagelayout } from '@layouts/.';
import { CreateDispatcherForm, CreateAdminForm } from '@components/forms';

export default function CreateProfile() {
    return (
        <Pagelayout title='Create Profile'>
            <div className='row'>
                <div className='col-12 col-lg-6 mb-3 form'>
                    <h3 className='text-center text-primary'>
                        Create a Dispatcher Profile
                    </h3>
                    <CreateDispatcherForm />
                </div>
                <div className='col-12 col-lg-6 mt-3 form'>
                    <h3 className='text-center text-primary'>
                        Create an Admin Profile
                    </h3>
                    <CreateAdminForm />
                </div>
                <style jsx>
                    {`
                        .form {
                            background-color: #f7f7f7;
                            padding: 30px 0px;
                        }
                    `}
                </style>
            </div>
        </Pagelayout>
    );
}
