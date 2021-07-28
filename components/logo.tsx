import Link from 'next/link';

export default function Logo() {
    return (
        <div className='logo'>
            <Link href='/' passHref>
                <h1>InstaDrop</h1>
            </Link>
            <style jsx>
                {`
                    .logo {
                        color: white;
                        text-align: center;
                        margin: 20px;
                    }
                `}
            </style>
        </div>
    );
}
