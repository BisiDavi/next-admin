import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '@components/.';

export default function Sidebar() {
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
            <style jsx>
                {`
									.sidebar-menu{
										display
									}
									aside.sidebar li{
										list-style:none;
									}
                    aside.sidebar {
                        background-color: rgb(57, 63, 78);
                        height: 100%;
                    }
                    aside a {
                        color: white;
                    }
                `}
            </style>
        </aside>
    );
}
