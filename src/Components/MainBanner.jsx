import React from 'react'

export default function MainBanner(props) {
    return (
            <div className="row my-4 mainBanner">
                {/* -----Block Banner----- */}
                <div className="col-lg-12 col-12 bannerImage">
                    {/* -----text------ */}
                        <p className='bannerContent'>{props?.text}</p>
                </div>
            </div>
    )
}
