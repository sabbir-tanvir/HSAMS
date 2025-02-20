import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimon.scss";

const testimonials = [
  {
    text: "Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team",
    imgSrc: "http://t.commonsupport.com/adro/images/resource/thumb-1.jpg",
    name: "Mahfuz Riad",
    designation: "Ui Designer & CEO"
  },
  {
    text: "Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team",
    imgSrc: "http://t.commonsupport.com/adro/images/resource/thumb-1.jpg",
    name: "Mahfuz Riad",
    designation: "Ui Designer & CEO"
  },
  {
    text: "Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team",
    imgSrc: "http://t.commonsupport.com/adro/images/resource/thumb-1.jpg",
    name: "Mahfuz Riad",
    designation: "Ui Designer & CEO"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  nextArrow: <span className='arrow-right'></span>,
  prevArrow: <span className='arrow-left'></span>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};

const Review = () => {
  return (
    <section className="testimonial-section">
      <div className="large-container">
        <div className="sec-title">
          <span className="title">Testimonial</span>
          <h2>What Our Core Clients Say?</h2>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-block" key={index}>
              <div className="inner-box">
                <div className="text">{testimonial.text}</div>
                <div className="info-box">
                  <div className="thumb">
                    <img src={testimonial.imgSrc} alt={testimonial.name} />
                  </div>
                  <h4 className="name">{testimonial.name}</h4>
                  <span className="designation">{testimonial.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="thumb-layer paroller">
          <figure className="image">
            <img src="http://t.commonsupport.com/adro/images/resource/user-thumbs.png" alt="User Thumbs" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Review;
