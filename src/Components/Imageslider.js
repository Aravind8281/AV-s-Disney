import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
function Imageslider() {
    let settings={
        dots:true,
        infinite:true,
        speed:300,
        slidesToShow:1,
        slidesTOScroll:1,
        autoplay: true
    }
  return (
    <Carousel {...settings}>
        <Wrap>
            <img src='/images/slider-badging.jpg' alt='' />
        </Wrap>
        <Wrap>
            <img src='/images/slider-badag.jpg' alt='' />
        </Wrap>
        <Wrap>
            <img src='/images/slider-scale.jpg' alt='' />
        </Wrap>
        <Wrap>
            <img src='/images/slider-scales.jpg' alt='' />
        </Wrap>
      
    </Carousel>
  )
}

export default Imageslider

const Carousel=styled(Slider)`
    margin-left: 20px;
    li.slick-active button::before{
        font-size:10px;
        color:rgb(150,158,171);
    }
    .slick-list{
        overflow: visible;
    }
    button{
        z-index:1;
    }
`
const Wrap=styled.div`
    const:pointer;
    img{
        border: 4px solid transparent;
        border-radius:4px;
        width:100%;
        height:100%;
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
        rgb(0 0 /73%) 0px 16px 10px -10px ;
        transition-duration:300ms;
        &:hover{
            border: 4px solid rgba(249,249,249,0.8);

        }
    }
`
