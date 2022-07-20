import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

    const Button = styled.div`
    width: 100px;
    heigt: 50px;
    display: flex;
    color: white;
    justify-content: center;
    background-color: ${(props) => props.btnColor || "blue"};
    align-items: center;
    pointer: cursor;
`;

    const ButtonDom = styled.div`
        display:flex;
    `

export const NavBar = () => {
    const navigate = useNavigate();

  return (
    <>
    <ButtonDom>
    <Button btnColor="purple" onClick={() => navigate('/')}>
     Home 
    </Button> 
    <Button btnColor="orange">
    <Link to="/about" > About </Link>
    </Button>
    <Button btnColot="red">
    <Link to="/love" > Love </Link>
    </Button>
    </ButtonDom>
    </>
  )
}
