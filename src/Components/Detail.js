import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <Container>
      <Backgroud>
        <img src='/images/disney1.webp' alt=''/>
      </Backgroud>
      <ImageTitle>
          <img src='/images/bao.png' alt=''/>
      </ImageTitle>
      <Controls>
        <Playbutton>
          <img src='/images/play-icon-black.png' alt=''/>
          <span>PLAY</span>
        </Playbutton>
        <Trailerbutton>
        <img src='/images/play-icon-white.png' alt=''/>
          <span>Trailer</span>
        </Trailerbutton>
        {/*<Addbutton>
          <span>+</span>
        </Addbutton>
        <Groupbutton>
          <img src='/images/group-icon.png' />

  </Groupbutton>*/}
       {/*<SUbTitle>
          2018 7m Family,Fantasy,Kids,Animation
</SUbTitle>*/}
        <Description>
          A Chinese Mom who's sad when her grown son leaves home gets another chance at motherhood,,, when one of her dumblings springs to life but the finds that nothing stays cute and amll forever
        </Description>
      </Controls>
    </Container>
  )
}

export default Detail
const Container=styled.div`
    display:flex;
    min-height:calc(100vh-70px);
    padding:0 calc(3.5vw+5px);
    position:relative;
`
const Backgroud=styled.div`
    poition:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.8;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`
const ImageTitle=styled.div`
    position: absolute;
    height:30vh
    img{
      width:auto;
      height:auto;
      object-fit:contain;
    }
    
`
const Controls=styled.div`
    position:absolute;
    display:flex;
    align-items:center;
`
const Playbutton=styled.button`
    border-radius:4px;
    font-size:15px;
    padding: 0px 24px;
    margin-top:260px;
    margin-left:24px;
    margin-right:24px;
    display:flex;
    align-items:center;
    height:56px;
    background:rgb(249,249,249)
    border:none;
    letter-spacing:1.8px;
    cursor:pointer;
    &:hover{
      background:rgb(198,198,198);
    }
  `
const Trailerbutton=styled(Playbutton)`
    background:rgba(0,0,0,3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
    text-transform:uppercase;
    margin-left:24px;
`
/*const Addbutton=styled.button`
    margin: 0px 0px 16px 24px;
    width:44px;
    height:44px;
    display:flex;
    margin-top:200px;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    cursor:pointer;
    span{
      font-sixe:50px;
    }
`
const Groupbutton=styled(Addbutton)`
    background:rgb(0,0,0);
  `*/

const Description=styled.div`
    position:absolute;
    color:rgb(249,249,249);
    letter-spacing:4px;
    font-size:15px;
    min-height:20px;
    margin-top:450px;
    margin-left:24px;
    
`
/*const SUbTitle=styled.div`
    line-height:1.4;
    font-size:20px;
    margin-top:300px;
    margin-left:24px;
`*/