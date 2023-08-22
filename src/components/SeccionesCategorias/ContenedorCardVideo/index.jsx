import CardVideo from "../CardVideo";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const ContenedorSlider = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
`;

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        position: "absolute",
        right: "15px",
        zIndex: "5",
        borderRadius: "50%",
        padding: "5px",
      }}
      onClick={onClick}
      title="Avanzar"
    />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        background: "black",
        position: "absolute",
        left: "15px",
        zIndex: "5",
        borderRadius: "50%",
        padding: "5px",
      }}
      onClick={onClick}
      title="Retroceder"
    />
  );
}

class ContenedorCardVideos extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <ContenedorSlider>
        <Slider {...settings}>
          {this.props.videosCategoria.map((video, index) => {
            return (
              <CardVideo
                key={index}
                video={video}
                categoriaColor={this.props.categoriaColor}
              />
            );
          })}
        </Slider>
      </ContenedorSlider>
    );
  }
}

export default ContenedorCardVideos;
