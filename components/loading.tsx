import React from 'react';

export default function Loading() {
    return (
        <div className='loading'>
            <h1>Instadrop | Loading ...</h1>
            <style jsx>
                {`
                    .loading {
                        display: flex;
                        color: white;
                        text-align: center;
                        margin: auto;
                        height: 100%;
                        width: 100%;
                        justify-content: center;
                        align-items: center;
                        background: #4a4a4a9c;
                        align-items: center;
                        position: fixed;
                        z-index: 1000;
                        top: 0;
                    }
                `}
            </style>
        </div>
    );
}
