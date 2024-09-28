import React from 'react'

export default function Footer() {
    return (
        <div className="container-fluid">
            <div className="row bg-dark py-3 px-lg-5 px-md-5 px-0">
                <div className="col-lg-4 col-6">
                    <div>
                    <a href='#'><img src='../assets/images/logo.png' className='img-fluid' alt='images' /> </a>
                        <p className='text-secondary mt-2'>
                            The UltraPro BlockChain is a <br />global,decentralized network<br /> with
                            developers
                        </p>
                    </div>
                </div>

                <div className='col-lg-2 col-md-6 col-6'>
                    <div className='vstack gap-2'>
                        <h4 className='text-white'>Explore</h4>
                        <a href='#' className='text-secondary text-decoration-none'>UPRO Explorer</a>
                        <a href='#' className='text-secondary text-decoration-none'>Exchange</a>
                        <a href='#' className='text-secondary text-decoration-none'>Wallet</a>
                        <a href='#' className='text-secondary text-decoration-none'>DeFi</a>
                        <a href='#' className='text-secondary text-decoration-none'>Payments</a>
                        <a href='#' className='text-secondary text-decoration-none'>NFT</a>
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 col-6">
                    <div className='d-flex flex-column gap-2'>
                        <h4 className='text-white'>Build</h4>
                        <a href='#' className='text-secondary text-decoration-none'>Expo</a>
                        <a href='#' className='text-secondary text-decoration-none'>whitepaper</a>
                        <a href='#' className='text-secondary text-decoration-none'>Services</a>
                        <a href='#' className='text-secondary text-decoration-none'>Token</a>
                        <a href='#' className='text-secondary text-decoration-none'>Staking</a>
                        <a href='#' className='text-secondary text-decoration-none'>Events</a>
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 col-6">
                    <div className='d-flex flex-column gap-2'>
                        <h4 className='text-white'>Community</h4>
                        <a href='#' className='text-secondary text-decoration-none'>Save Crypto</a>
                        <a href='#' className='text-secondary text-decoration-none'>Telegram</a>
                        <a href='#' className='text-secondary text-decoration-none'>Instagram</a>
                        <a href='#' className='text-secondary text-decoration-none'>Facebook</a>
                        <a href='#' className='text-secondary text-decoration-none'>Youtube</a>
                        <a href='#' className='text-secondary text-decoration-none'>X</a>
                        <a href='#' className='text-secondary text-decoration-none'>Medium</a>
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 col-6">
                    <div className='d-flex flex-column gap-2'>
                        <h4 className='text-white'>About</h4>
                        <a href='#' className='text-secondary text-decoration-none'>Privacy Policy</a>
                        <a href='#' className='text-secondary text-decoration-none'>Terms of use</a>
                        <a href='#' className='text-secondary text-decoration-none'>Careers</a>
                        <a href='#' className='text-secondary text-decoration-none'>Contact Us</a>
                        <a href='#' className='text-secondary text-decoration-none'>Blog</a>
                    </div>
                </div>
            </div>
        </div>

    )
}
