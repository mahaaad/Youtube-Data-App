import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import Button from '@material-ui/core/Button'

export default function TopBar(props){
    var path = useLocation().pathname

    const Bar = styled.div`
        display: ${path !== "/" ? 'block' : 'none'};
        position: fixed;
        left: 3vw;
        top: 0;
        width: 100vw;
        height: 2.5vw;
        z-index: 3;
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0px 0px 8px 2px #00000020;

    `
    const Title = styled.h1`
        float: left;
        font-size: 1.25vw;
        margin-top: 0.35vw;
        letter-spacing: -1px;
        opacity: 80%;
        transform: scale(1, 1);

    `
    return(
        <Bar>
            <img src="/images/icons/brightlogo.svg" style={{paddingLeft: "0.25vw", width: "1.5vw", margin: "0.75vw", float: "left"}}></img>
            <Title>Profile</Title>
            <Link to="/"  style={{ textDecoration: 'none' }}>
            <Button style={{position: "fixed", right: "6.5vw", fontSize: "0.5vw", width: "4vw", height: "1.25vw", margin: "0.75vw", color: "white", backgroundColor: "#ff3d3d"}} variant="contained">Log Out</Button>
            </Link>
            <Button style={{position: "fixed", right: "0", fontSize: "0.45vw", width: "6vw", height: "1.25vw",  margin: "0.75vw", color: "white", backgroundColor: "#ff3d3d"}} variant="contained" >Switch Accounts</Button>
        </Bar>
    )
}