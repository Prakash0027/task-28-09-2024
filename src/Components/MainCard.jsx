import React from 'react'

export default function MainCard(props) {
    return (
        <div className="card" style={{ borderRadius: '20px' }}>
            <img src={props?.image} className='img-fluid rounded-top-4' alt={props?.image} />
            <div className="card-body rounded-bottom-4">
                <h5 className='card-title text-white mt-2 text-center'>{props?.text}</h5>
                <section className='card-text text-white d-flex align-items-center'>
                    <p className='m-0 flex-grow-1 text-center'>{props?.date}</p>
                     <a href='#'> <img src={props?.arrowImage} className='img-fluid' alt='arrow' /> </a> 
                </section>
            </div>
        </div>
    )
}
