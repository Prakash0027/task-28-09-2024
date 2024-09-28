import React from 'react'
import MainCard from './MainCard'
import MainBanner from './MainBanner';

export default function BlockCompo() {
    const text = "MTD IS LIVE ON ULTRAPRO'S USDT MARKET";
    const date = 'June 3,2024';
    const arrowImage = '../assets/images/arrow .png';
    const [active, setActive] = React.useState('Announcements');
    const [page,setPage] = React.useState(1);
    // handleActive
    const handleActive = (value) => {
        setActive(value)
    }
    // handlePage
    const handlePage = (value)=>{
         setPage(value)
    }
    return (
        <>
            <div className="blockContainer">
                 <MainBanner text={'Blog'} />
                <div className="row  mt-4">
                    <div className="col-lg-7 offset-lg-3 px-2">
                        <div className=' d-flex justify-content-center  align-items-center py-1 gap-4 border rounded'>
                            <ul className="nav text-nowrap flex-nowrap overflow-auto">
                                <li className="nav-item">
                                    <button className={`nav-link text-white  ${active === 'Announcements' ? 'active' : ''}`} onClick={() => handleActive('Announcements')} >Announcements</button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link text-white  ${active === 'Press Release' ? 'active' : ''}`} onClick={() => handleActive('Press Release')} >Press Release</button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link text-white  ${active === 'Market Updates' ? 'active' : ''}`} onClick={() => handleActive('Market Updates')} >Market Updates</button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link text-white  ${active === 'Earn' ? 'active' : ''}`} onClick={() => handleActive('Earn')}>Earn</button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link text-white  ${active === 'Cryptocurrencies' ? 'active' : ''}`} onClick={() => handleActive('Cryptocurrencies')} >Cryptocurrencies</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* -----title------   */}
                <header className='blockTitle'>
                    India's Most trusted bitcoin & cryoto blog
                </header>

                {/* ------cards------ */}
                {/* ----condition based worked--- */}
                {
                    active === 'Announcements' &&
                    <>
                        {/* -----row------ */}
                        <div className="row mt-4 px-4 g-3">
                            <div className="col-lg-4">
                                <MainCard image={'../assets/images/card-image-1.png'} text={text} date={date} arrowImage={arrowImage} />
                            </div>

                            <div className="col-lg-4">
                                <MainCard image={'../assets/images/card-image-2.png'} text={text} date={date} arrowImage={arrowImage} />
                            </div>

                            <div className="col-lg-4">
                                <MainCard image={'../assets/images/card-image-3.png'} text={text} date={date} arrowImage={arrowImage} />
                            </div>
                        </div>
                        {/* -----row------ */}
                        <div className="row mt-4 px-4 g-3">
                            <div className="col-lg-4">
                                <MainCard image={'../assets/images/card-image4.png'} text={text} date={date} arrowImage={arrowImage} />
                            </div>

                            <div className="col-lg-4">
                                <MainCard image={'../assets/images/card-image-5.png'} text={text} date={date} arrowImage={arrowImage} />
                            </div>

                            <div className="col-lg-4">
                                <MainCard image={'../assets/images/card-image-6.png'} text={text} date={date} arrowImage={arrowImage} />
                            </div>
                        </div>
                        {/* -----row------ */}
                        <div className="row mt-4 px-4 g-3">
                            <div className="col-lg-4">
                                <MainCard image={'../assets/images/card-image4.png'} text={text} date={date} arrowImage={arrowImage} />
                            </div>

                            <div className="col-lg-4">
                                <MainCard image={'../assets/images/card-image-5.png'} text={text} date={date} arrowImage={arrowImage} />
                            </div>

                            <div className="col-lg-4">
                                <MainCard image={'../assets/images/card-image-6.png'} text={text} date={date} arrowImage={arrowImage} />
                            </div>
                        </div>
                    </>


                }
                {/* ------pagination------- */}
                <div className="row">
                    <div className="col-lg-12 ">
                        <nav>
                            <ul className="pagination d-flex justify-content-center mt-lg-4 mt-2 gap-lg-3 gap-1">
                                <li className="page-item">
                                    <a className="page-link bg-dark text-white rounded-0" href='/'  aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <button className={`page-link bg-dark text-white ${page === 1 ? 'active':''}`}  onClick={()=>handlePage(1)} >
                                        <span aria-hidden="true">1</span>
                                    </button>
                                </li>
                                <li className="page-item">
                                    <button className={`page-link bg-dark text-white ${page === 2 ? 'active':''}`}  onClick={()=>handlePage(2)} >
                                        <span aria-hidden="true">2</span>
                                    </button>
                                </li>
                                <li className="page-item"><button className={`page-link bg-dark text-white ${page === 3 ? 'active':''}`}  onClick={()=>handlePage(3)}>3</button></li>
                            
                                <li className="page-item">
                                    <button className={`page-link bg-dark text-white ${page === 4 ? 'active':''}`}  onClick={()=>handlePage(4)}>
                                        <span aria-hidden="true">4</span>
                                    </button>
                                </li>
                                <li className="page-item">
                                    <button className={`page-link bg-dark text-white ${page === 5 ? 'active':''}`}  onClick={()=>handlePage(5)}>
                                        <span aria-hidden="true">5</span>
                                    </button>
                                </li>
                                <li className="page-item">
                                    <a className="page-link bg-dark text-white rounded-0" href="/" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </>
    )
}
