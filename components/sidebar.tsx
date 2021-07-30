import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '@components/.';

export default function Sidebar({ toggleSidebar }: SidebarProps) {
    const router = useRouter();

    function setActiveRoute(route) {
        const activeRoute = router.isReady && router.route.includes(route);

        const routeState = activeRoute ? 'active' : '';
        return routeState;
    }

    const sidebarMenuList = [
        { link: '/', name: 'Dashboard', icons: 'fa fa-ball' },
        {
            link: '/create-profile',
            name: 'Create Profiles',
            icons: 'fa fa-ball',
        },
        { link: '/create-trip', name: 'Create Trips', icons: 'fa fa-ball' },
        { link: '/active-trip', name: 'Active Trips', icons: 'fa fa-ball' },
        {
            link: '/dispatcher-list',
            name: 'Dispatcher List',
            icons: 'fa fa-ball',
        },
        { link: '/admin-list', name: 'Admin List', icons: 'fa fa-ball' },
        { link: '/store-list', name: 'Store List', icons: 'fa fa-ball' },
        {
            link: '/trip-history',
            name: 'Trip History',
            icons: 'fa fa-ball',
        },
        { link: '/map', name: 'Map', icons: 'fa fa-ball' },
    ];
    return (
        <aside className='sidebar'>
            <div className='navbar-brand-box'>
                <div className='logo my-5'>
                    <Logo />
                </div>
                <ul className='menu my-5'>
                    {sidebarMenuList.map((sidebar, index) => (
                        <li
                            className='my-4'
                            onClick={() => setActiveRoute(sidebar.link)}
                            key={index}
                        >
                            <Link href={sidebar.link} passHref>
                                <a className='waves-effect'>
                                    <i className={sidebar.icons}></i>
                                    <span>{sidebar.name}</span>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div onClick={toggleSidebar} className='overlay'></div>
            <style jsx>
                {`
                    aside.sidebar {
                        height: 100%;
                    }
                    aside.sidebar li {
                        list-style: none;
                    }
                    aside navbar-brand-box {
                        background-color: rgb(57, 63, 78);
                        height: 100%;
                    }
                    aside a {
                        color: white;
                    }
                    .overlay {
                        background-color: black;
                        display: none;
                    }

                    @media (max-width: 768px) {
                        aside.sidebar {
                            position: fixed;
                            z-index: 100;
                            display: flex;
                            width: 100%;
                        }
                        .overlay {
                            opacity: 0.5;
                            background: black;
                            display: block;
                            height: 100%;
                            width: 100%;
                            z-index: 10;
                            position: fixed;
                            right: 0;
                        }
                        .navbar-brand-box {
                            background-color: rgb(57, 63, 78);
                            z-index: 1000;
                        }
                    }
                `}
            </style>
        </aside>
    );
}

interface SidebarProps {
    toggleSidebar: () => void;
}
