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
    const arrayData = this.props.videosCategoria;
    const mobileHandleInfinite = () => {
      if (arrayData.length >= 1) {
        return true;
      } else {
        return false;
      }
    };

    const tabletHandleInfinite = () => {
      if (arrayData.length >= 2) {
        return true;
      } else {
        return false;
      }
    };

    const DesktopHandleInfinite = () => {
      if (arrayData.length >= 3) {
        return true;
      } else {
        return false;
      }
    };

    const settings = {
      dots: true,
      speed: 500,
      infinite: DesktopHandleInfinite(),
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      vertical: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            infinite: DesktopHandleInfinite(),
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            infinite: tabletHandleInfinite(),
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            infinite: mobileHandleInfinite(),
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <ContenedorSlider>
        <Slider {...settings}>
          {arrayData.map((video, index) => {
            return (
              <CardVideo
                key={index}
                video={video}
                categoriacolor={this.props.categoriacolor}
              />
            );
          })}
        </Slider>
      </ContenedorSlider>
    );
  }
}

export default ContenedorCardVideos;
