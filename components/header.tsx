import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from '@hooks/.';
import { makeTokenInvalid } from '@components/requests/axiosInstance';
import { UserContext } from '../context/userContext';
import Avatar from '@components/avatar';

export default function Header({ title, toggleSidebar }: HeaderProps) {
    const { user } = useContext(UserContext);
    const { removeStorage } = useLocalStorage();

    const router = useRouter();

    console.log('user', user);

    const userName = `${user?.firstName} ${user?.lastName}`;

    function logUserOut() {
        makeTokenInvalid();
        removeStorage('currentUser');
        router.push('/auth/login');
    }

    return (
        <header className='page-header'>
            <div className='navbar-header'>
                <button
                    type='button'
                    onClick={toggleSidebar}
                    className='btn btn-sm mr-2 d-lg-none px-3 font-size-16 header-item waves-effect'
                    id='vertical-menu-btn'
                >
                    <i className='fa fa-fw fa-bars fa-2x'></i>
                </button>
                <h1 className='my-2'>{title}</h1>

                <div className='d-flex align-items-center justify-content ml-2 user-details'>
                    <Avatar name={userName} />
                    <span>{userName}</span>
                    <button
                        className='btn btn-danger d-flex align-items-center justify-content-between mx-4'
                        onClick={logUserOut}
                    >
                        Log Out
                    </button>
                </div>
            </div>
            <style jsx>
                {`
                    .user-details span {
                        font-weight: bold;
                        font-size: 20px;
                    }
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
                    header.page-header h1 {
                        font-size: 30px;
                    }
                    .navbar-header {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        height: 100px;
                        justify-content: space-between;
                    }

                    @media (max-width: 768px) {
                        header.page-header {
                            padding: 0px;
                        }
                        header.page-header h1.my-2 {
                            font-size: 18px;
                            text-align: center;
                            font-weight: bold;
                        }
                        .user-details {
                            justify-content: space-around;
                            display: flex;
                            flex-direction: column;
                            height: 80px;
                        }
                        .user-details span {
                            font-size: 15px;
                        }
                        .user-details button {
                            font-size: 12px;
                            font-weight: bold;
                        }
                    }
                `}
            </style>
        </header>
    );
}

interface HeaderProps {
    title: String;
    toggleSidebar: () => void;
}
