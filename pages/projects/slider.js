// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';

export default function Slider() {
    const swiper = new Swiper('.swiper-container', {
        //dots at the bottom to show current picture and position in array
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
                {
                    images.map((image, index) => (
                        <div className="swiper-slide" key={index}>
                            <img src={image} />
                        </div>
                    ))}
            </div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>

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
