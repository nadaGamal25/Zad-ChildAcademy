import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NextArrow= (props)=>{
    const {onClick}= props
    return(
        <div className="control-btn" onClick={onClick}>
            
        </div>
    );
};
const PrevArrow= (props)=>{
    const {onClick}= props
    return(
        <div className="control-btn" onClick={onClick}>
            
        </div>
    );
};

export default function Header() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      };
  return (
    <>
    <section className="header">
        <div className="header-img">
            <div className="row header-boxs">
            <Slider {...settings}>
            <div className="big-box">
                <div className="grey-box">
                <div className='color-box bink'>
                    <h5>الحافظ الصغير</h5>
                </div>
                </div>
            </div>
            <div className="big-box">
                <div className="grey-box">
                <div className='color-box light-green'>
                    <h5>زادالطفل المسلم</h5>
                </div>
                </div>
            </div>
            <div className="big-box">
                <div className="grey-box">
                <div className='color-box orange'>
                    <h5>اللغة الإنجليزية</h5>

                </div>
                </div>
            </div>
            <div className="big-box">
                <div className="grey-box">
                <div className='color-box green'>
                    <h5>الحساب الذهنى</h5>
                </div>
                </div>
            </div>
            <div className="big-box">
                <div className="grey-box">
                <div className='color-box bink'>
                    <h5>معمل الحاسب الآلى</h5>
                </div>
                </div>
            </div>
            <div className="big-box">
                <div className="grey-box">
                <div className='color-box light-green'>
                    <h5> الرياضيات</h5>
                </div>
                </div>
            </div>
            </Slider>
            </div>
        </div>
    </section>
    </>
  )
}
