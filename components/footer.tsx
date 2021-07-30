import React from 'react';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='row align-items-center justify-content-between'>
                <div className='col-6'>2021 © InstaDrop.</div>
                <div className='col-6'>
                    <div className='text-sm-right'>Powered by CloudMall.</div>
                </div>
            </div>
            <style jsx>
                {`
                    footer {
                        color: rgb(108, 117, 125);
                        border-top: 1px solid rgb(222, 226, 230);
                        padding: 19px 12px 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .row {
                        width: 100%;
                    }
                `}
            </style>
        </footer>
    );
}
