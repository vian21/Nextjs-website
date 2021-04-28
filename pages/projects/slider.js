// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/swiper-bundle.min.css';

import Image from 'next/image'

export default function Slider() {
    const swiper = new Swiper('.swiper-container', {
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    const images = [
        '/images/galaxy.jpg',
        '/images/suits.png',
        '/images/shuttle.jpg',
        '/images/austronaut.jpg',
    ]
    return <div className='main'>
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {/*slides*/}

                {
                    images.map((image, index) => (
                        <div className="swiper-slide" key={index}>
                            <img src={image}/>
                        </div>
                    ))}



            </div>

            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>

            <div className="swiper-pagination"></div>


        </div>
        <style jsx>{`
        .main{
            width:98% !important;
            margin-top:0px !important;
        }
        .swiper-container {
            width: 100%;
            height: 500px;
          }
          .swiper-slide img{
              object-fit:cover;
              width:100%;
              height:500px;
          }
          `}

        </style>
    </div>

}
