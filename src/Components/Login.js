import React from 'react'
import styled from 'styled-components'
function Login() {
  return (
    <Container>
      <CTA>
        <CTlogo src="/images/cta-logo-one.svg" />
        <Signup>Signup</Signup>
        <Description>
            Get premium subscription to get exclusive rewards and awesome movies .. Stay tuned!!
        </Description>
        <CTlogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  )
}

export default Login
const Container=styled.div`
    position:relative;
    height:calc(100vh-70px);
    display:flex;
    align-items:center;
    justify-content:center;
    &:before{
        background-image: url("/images/login-background.jpg");
        //background-position:top;
        background-size:cover;
        //background-repeat:no-repeat;
        position:absolute;
        content:"";
        top:0;
        height:600px;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
    }
`
const CTA=styled.div`
    max-width:650px;
    padding: 80px 40px;
    width:60%;
    display:flex;
    flex-direction:column;
    
`
const CTlogo=styled.img`
`
const Signup=styled.a`
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    color:#f9f9f9;
    border-radius:4px;
    text-align:center;
    font-size:18px;
    cursor:pointer;
    transition: all 250ms;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;
    &:hover{
        background:#0483ee;
    }
`
const Description=styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`
const CTlogoTwo=styled.img``