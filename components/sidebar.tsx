import Link from 'next/link';
import { Logo } from '@components/.';

export default function Sidebar() {
    const sidebarMenuList = [
        { link: '/', name: 'Dashboard', icons: 'fa fa-ball' },
        {
            link: '/create-profile',
            name: 'Create Profiles',
            icons: 'fa fa-ball',
        },
        { link: '/create-trips', name: 'Create Trips', icons: 'fa fa-ball' },
        { link: '/active-trips', name: 'Active Trips', icons: 'fa fa-ball' },
        {
            link: '/dispatcher-list',
            name: 'Dispatcher List',
            icons: 'fa fa-ball',
        },
        { link: '/admin-list', name: 'Admin List', icons: 'fa fa-ball' },
        { link: '/store-list', name: 'Store List', icons: 'fa fa-ball' },
        {
            link: '/trips-history',
            name: 'Trips History',
            icons: 'fa fa-ball',
        },
        { link: '/map', name: 'Map', icons: 'fa fa-ball' },
    ];
    return (
        <aside className='sidebar'>
            <div className='navbar-brand-box'>
                <Logo />
                <ul className='menu'>
                    <li className='menu-title'>Menu</li>
                    {sidebarMenuList.map((sidebar, index) => (
                        <li className='my-4' key={index}>
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
