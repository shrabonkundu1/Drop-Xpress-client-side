import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import firstBannerImage from '../../assets/banner/banner1.png'
import secondBannerImage from '../../assets/banner/banner2.png'
import thirdBannerImage from '../../assets/banner/banner3.png'
const Banner = () => {
  return (
      <Carousel>
                <div>
                    <img src={firstBannerImage} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={secondBannerImage} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={thirdBannerImage} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  )
}

export default Banner