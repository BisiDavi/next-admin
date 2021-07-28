import { Pagelayout } from '@layouts/.';

export default function CreateProfile() {
    return (
        <Pagelayout title='Create Profile'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <h3 className='text-center text-primary'>
                        Create a Dispatcher Profile
                    </h3>
                    <form className='needs-validation' noValidate>
                        <div className='form-group'>
                            <h5 className='text-primary'>Personal Info</h5>
                            <div className='form-row my-3'>
                                <div className='col-6 col-lg-6'>
                                    <label htmlFor='firstName'>
                                        First name
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='firstName'
                                        placeholder='First name'
                                        value=''
                                        required
                                    />
                                </div>
                                <div className='col-6 col-lg-6'>
                                    <label htmlFor='lastName'>Last name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='lastName'
                                        placeholder='Last name'
                                        value=''
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='form-row my-3 align-items-center'>
                            <div className='col-4 col-lg-4'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='email'
                                    placeholder='Email'
                                    value=''
                                    required
                                />
                            </div>
                            <div className='col-4 col-lg-4'>
                                <label htmlFor='phoneNumber'>
                                    Phone Number
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='phoneNumber'
                                    placeholder='Phone Number'
                                    value=''
                                    required
                                />
                            </div>
                            <div className='col-4 col-lg-4'>
                                <label htmlFor='age'>Whatsapp Number</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='whatsappNumber'
                                    placeholder='Whatsapp Number'
                                    value=''
                                    required
                                />
                            </div>
                        </div>
                        <div className='form-group'>
                            <h5 className='text-primary'>Credentials</h5>
                            <div className='form-row my-3'>
                                <div className='col-12 col-lg-4 col-md-4'>
                                    <label htmlFor='address'>User Name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='userName'
                                        placeholder='User Name'
                                        value=''
                                        required
                                    />
                                </div>
                                <div className='col-12 col-lg-4 col-md-4'>
                                    <label htmlFor='origin'>Password</label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='Password'
                                        placeholder='Password'
                                        value=''
                                        required
                                    />
                                </div>
                                <div className='col-12 col-lg-4 col-md-4'>
                                    <label htmlFor='origin'>
                                        Confirm Password
                                    </label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='Password'
                                        placeholder='Confirm Password'
                                        value=''
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='form-group'>
                            <h5 className='text-primary'>Fleet Details</h5>
                            <div className='form-row my-3'>
                                <div className='col-6 col-lg-6'>
                                    <label htmlFor='fleetBrand'>
                                        Fleet Brand
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='fleetBrand'
                                        placeholder='Fleet Brand'
                                        value=''
                                        required
                                    />
                                </div>
                                <div className='col-6 col-lg-6'>
                                    <label htmlFor='fleetModel'>
                                        Fleet Model
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='fleetModel'
                                        placeholder='Fleet Model'
                                        value=''
                                        required
                                    />
                                </div>
                            </div>
                            <div className='form-row my-3'>
                                <div className='col-12 col-lg-4 col-md-4'>
                                    <label htmlFor='fleetColor'>
                                        Fleet Color
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='fleetColor'
                                        placeholder='Fleet Color'
                                        value=''
                                        required
                                    />
                                </div>
                                <div className='col-12 col-lg-4 col-md-4'>
                                    <label htmlFor='fleetPlateNo'>
                                        Fleet Plate Number
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='fleetPlateNo'
                                        placeholder='Fleet Plate Number'
                                        value=''
                                        required
                                    />
                                </div>
                                <div className='col-12 col-lg-4 col-md-4'>
                                    <label htmlFor='fleetOwner'>
                                        Fleet Owner
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='fleetOwner'
                                        placeholder='fleetOwner'
                                        value=''
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            className='btn btn-primary waves-effect waves-light'
                            type='submit'
                        >
                            Submit form
                        </button>
                    </form>
                </div>
                <div className='col-12 col-lg-6'>
                    <h3 className='text-center text-primary'>
                        Create an Admin Profile
                    </h3>
                    <form className='needs-validation' noValidate>
                        <div className='form-group'>
                            <h5 className='text-primary'>Personal Info</h5>
                            <div className='form-row my-3'>
                                <div className='col-6 col-lg-6'>
                                    <label htmlFor='firstName'>
                                        First name
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='firstName'
                                        placeholder='First name'
                                        value=''
                                        required
                                    />
                                    <div className='valid-feedback'>
                                        Looks good!
                                    </div>
                                </div>
                                <div className='col-6 col-lg-6'>
                                    <label htmlFor='lastName'>Last name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='lastName'
                                        placeholder='Last name'
                                        value=''
                                        required
                                    />
                                    <div className='valid-feedback'>
                                        Looks good!
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='form-row my-3 align-items-center'>
                            <div className='col-12 col-lg-4 col-md-4'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='email'
                                    placeholder='Email'
                                    value=''
                                    required
                                />
                            </div>
                            <div className='col-12 col-lg-4 col-md-4'>
                                <label htmlFor='phoneNumber'>
                                    Phone Number
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='phoneNumber'
                                    placeholder='Phone Number'
                                    value=''
                                    required
                                />
                            </div>
                            <div className='col-12 col-lg-4 col-md-4'>
                                <label htmlFor='age'>Whatsapp Number</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='whatsappNumber'
                                    placeholder='Whatsapp Number'
                                    value=''
                                    required
                                />
                            </div>
                        </div>
                        <div className='form-group'>
                            <h5 className='text-primary'>Credentials</h5>
                            <div className='form-row my-3'>
                                <div className='col-12 col-lg-4 col-md-4'>
                                    <label htmlFor='address'>User Name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='userName'
                                        placeholder='User Name'
                                        value=''
                                        required
                                    />
                                    <div className='valid-feedback'>
                                        Looks good!
                                    </div>
                                </div>
                                <div className='col-12 col-lg-4 col-md-4'>
                                    <label htmlFor='origin'>Password</label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='Password'
                                        placeholder='Password'
                                        value=''
                                        required
                                    />
                                    <div className='valid-feedback'>
                                        Looks good!
                                    </div>
                                </div>
                                <div className='col-12 col-lg-4 col-md-4'>
                                    <label htmlFor='origin'>
                                        Confirm Password
                                    </label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='Password'
                                        placeholder='Confirm Password'
                                        value=''
                                        required
                                    />
                                    <div className='valid-feedback'>
                                        Looks good!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className='btn btn-primary waves-effect waves-light'
                            type='submit'
                        >
                            Submit form
                        </button>
                    </form>
                </div>
            </div>
        </Pagelayout>
    );
}
