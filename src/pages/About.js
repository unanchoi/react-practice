import React from 'react'
import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <>
    <h1> 어바웃 페이지 </h1>
    <Outlet />
    </>
  )
}

export default About;


