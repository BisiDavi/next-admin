import Image from 'next/image';

export default function Header({ title }: HeaderProps) {
    return (
        <header className='page-header'>
            <div className='navbar-header'>
                <button
                    type='button'
                    className='btn btn-sm mr-2 d-lg-none px-3 font-size-16 header-item waves-effect'
                    id='vertical-menu-btn'
                >
                    <i className='fa fa-fw fa-bars'></i>
                </button>
                <h1 className='my-2'>{title}</h1>

                <div className='d-flex align-items-center'>
                    <div className='dropdown d-inline-block ml-2'>
                        <button
                            type='button'
                            className='btn header-item waves-effect'
                            id='page-header-user-dropdown'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                        >
                            <Image
                                className='rounded-circle header-profile-user'
                                src='/images/users/avatar-3.jpg'
                                alt='Header Avatar'
                                height={100}
                                width={100}
                            />
                            <span className='d-none d-sm-inline-block ml-1'>
                                Joshua D.
                            </span>
                            <i className='mdi mdi-chevron-down d-none d-sm-inline-block'></i>
                        </button>
                        <div className='dropdown-menu dropdown-menu-right'>
                            <a
                                className='dropdown-item d-flex align-items-center justify-content-between'
                                href='#'
                            >
                                <span>Profile</span>
                                <span>
                                    <span className='badge badge-pill badge-warning'>
                                        1
                                    </span>
                                </span>
                            </a>
                            <a
                                className='dropdown-item d-flex align-items-center justify-content-between'
                                href='#'
                            >
                                Settings
                            </a>
                            <a
                                className='dropdown-item d-flex align-items-center justify-content-between'
                                href='#'
                            >
                                <span>Log Out</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    header.page-header {
                        display: flex;
                        -webkit-box-pack: justify;
                        justify-content: space-between;
                        -webkit-box-align: center;
                        align-items: center;
                        height: 100px;
                        background-color: rgb(245, 247, 250);
                        box-shadow: rgb(233, 236, 239) 0px 1px 1px;
                        padding: 0px 20px;
                    }
                    .navbar-header {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        height: 100px;
                        justify-content: space-between;
                    }
                `}
            </style>
        </header>
    );
}

interface HeaderProps {
    title: String;
}
