import Slider from "react-slick";
import "./carousel.css";
import "./carouselTheme.css";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          className="slider-img"
          src="https://picsum.photos/800/300/?random"
          alt="1"
        />
      </div>
      <div>
        <img
          className="slider-img"
          src="https://picsum.photos/800/301/?random"
          alt="2"
        />
      </div>
      <div>
        <img
          className="slider-img"
          src="https://picsum.photos/800/302/?random"
          alt="3"
        />
      </div>
      <div>
        <img
          className="slider-img"
          src="https://picsum.photos/800/303/?random"
          alt="4"
        />
      </div>
      <div>
        <img
          className="slider-img"
          src="https://picsum.photos/800/304/?random"
          alt="5"
        />
      </div>
      <div>
        <img
          className="slider-img"
          src="https://picsum.photos/800/304/?random"
          alt="5"
        />
      </div>
    </Slider>
  );
};
export default Carousel;