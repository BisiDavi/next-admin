import Image from 'next/image';

export default function Error404Page() {
    return (
        <div className='errorPage'>
            <div className='card'>
                <div className='card-body'>
                    <div className='text-center mb-4 mt-3'>
                        <a href='#'>
                            <span>
                                <h1>InstaDrop</h1>
                            </span>
                        </a>
                    </div>
                    <div className='mt-4 pt-3 text-center'>
                        <div className='row justify-content-center'>
                            <div className='col-6 my-4'>
                                <Image
                                    src='/images/404-error.svg'
                                    title='invite.svg'
                                    height={100}
                                    width={100}
                                    alt='error icon'
                                />
                            </div>
                        </div>
                        <h3 className='expired-title mb-4 mt-3'>
                            Page Not Found
                        </h3>
                        <p className='text-muted mt-3'>
                            It&#39;s looking like you may have taken a wrong
                            turn. Don&#39;t worry... it happens to the best of
                            us. You might want to check your internet
                            connection.
                        </p>
                    </div>

                    <div className='mb-3 mt-4 text-center'>
                        <a href='#' className='btn btn-primary btn-block'>
                            Back to Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
