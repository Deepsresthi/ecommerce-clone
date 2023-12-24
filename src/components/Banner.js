import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <>
          <div className='relative'>
              <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
              <Carousel
                  autoPlay
                  infiniteLoop
                  showStatus={false}
                  showIndicators={false}
                  showThumbs={false}
                  interval={5000}>
                  
                  <div>
                      <img loading='lazy' src='https://m.media-amazon.com/images/I/913CR3KRlvL._SX3000_.png'/>
                  </div>
                    <div>
                      <img loading='lazy' src='https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/IMG23/TVs/Sabeer/DEC_BAU/D103027652_IN_HE_TV_GW_TVs-Under_20000_BAU_Homepage_DesktopHeroTemplate_3000x1200._CB571358312_.jpg'/>
                  </div>
                    <div>
                      <img loading='lazy' src='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81s2aVxs-4L._SX3000_.jpg'/>
                  </div>
                  
              </Carousel>      
        </div>
    </>
  )
}

export default Banner