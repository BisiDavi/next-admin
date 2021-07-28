import React from 'react';

export default function Card({ data }: CardProps) {
    return (
        <div className='card'>
            <div className='card-body'>
                <i className='bx bx-layer float-right m-0 h2 text-muted'></i>
                <h6 className='text-muted text-uppercase mt-0'>{data.title}</h6>
                <h3 className='mb-3' data-plugin='counterup'>
                    {data.count}
                </h3>
            </div>
        </div>
    );
}

interface CardProps {
    data: {
        count: String;
        title: String;
    };
}
