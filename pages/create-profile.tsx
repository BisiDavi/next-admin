import { Pagelayout } from '@layouts/.';
import { CreateDispatcherForm, CreateAdminForm } from '@components/forms';

export default function CreateProfile() {
    return (
        <Pagelayout title='Create Profile'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <h3 className='text-center text-primary'>
                        Create a Dispatcher Profile
                    </h3>
                    <CreateDispatcherForm />
                </div>
                <div className='col-12 col-lg-6'>
                    <h3 className='text-center text-primary'>
                        Create an Admin Profile
                    </h3>
                    <CreateAdminForm />
                </div>
            </div>
        </Pagelayout>
    );
}
