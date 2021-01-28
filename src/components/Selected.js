import React from 'react'
import styled from 'styled-components'

export default function Selected(){
const Rect = styled.div`
    position: fixed;
    left: 0;
    width: 5px;
    height: 3vw;
    background-color: #ff3d3d;
    opacity: 80%;
    transition: all 0.2s;
    z-index: 5;
`
const Box = styled.div`
    pointer-events: none;
    width: 3.5vw;
    height: 3vw;
    background-color: #ff3d3d10;
    top: 4.5vw;
    width: 3vw;
    height: 3vw;
    position: fixed;
    transition: ease-in-out 0.5s;
    z-index: 3;
    overflow-x: hidden;
    transition: ease-in-out 0.3s;
`
    return(
        <Box id="box" >
            <Rect />
        </Box>
    )
}