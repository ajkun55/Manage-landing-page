import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const contents = [
  {
    image: "/images/avatar-anisha.png",
    author: "Anisha Li",
    text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    image: "/images/avatar-ali.png",
    author: "Ali Bravo",
    text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    image: "/images/avatar-richard.png",
    author: "Richard Watts",
    text: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  {
    image: "/images/avatar-shanai.png",
    author: "Shanai Gough",
    text: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

function Responsive() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {contents.map((c) => (
          <div className="slider" key={c.author}>
            <img src={c.image} alt="" />
            <h4>{c.author}</h4>
            <p>{c.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
