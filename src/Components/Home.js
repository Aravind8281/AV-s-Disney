import React from 'react'
import styled from 'styled-components'
import Imageslider from './Imageslider'
import Viewers from './Viewers'
import Movies from './Movies'

function Home() {

    return (
        <Container>
            <Imageslider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
    padding: 0 calc(3.5vw + 5px);
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    position: relative;
    &:before {
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`





/*import React,{useEffect} from 'react'
import styled from 'styled-components'
import Imageslider from './Imageslider'
import Movies from './Movies'
import Viewers from './Viewers'
import db from '../Firebase'
import {useDispatch} from 'react-redux'
import {setMovies} from "../features/movie/MovieSlice"
function Home() {
  
    const dispatch=useDispatch();

  

  useEffect(()=>{
    db.collection("movies").onSnapshot((snapshot)=>{
      let tempMovies=snapshot.docs.map((doc)=>{
        return {id:doc.id,...doc.data()}
      })
      dispatch(setMovies(tempMovies));
    })
  },[])


  return (
    <Container>
      <Imageslider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

const Container=styled.main`
  min-height:calc(100vh - 70px);
  padding: 0 calc(3.5vw +5px);
  position:relative;
  overflow-x:hidden;
  %:before{
    background: url("/images/home-background.png") center center / cover 
    no-repeat fixed;
    content:"";
    position:absolue;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
  }
`
*/