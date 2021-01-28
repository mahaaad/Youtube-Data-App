import React from 'react'
import styled from 'styled-components'
import FadeIn from 'react-fade-in'

export default function Channel(props){

    const Title = styled.h1` 
        font-size: ${props.title.length > 20 ? '0.7vw' : '1vw'};
        text-align: center;
        color: black;
        float: left;
        transition: ease-in-out 0.5s;
    `
    const ChannelPic = styled.img`
        width: ${props.num === "1" ? '12.5vw' : (props.num === "2" ? '11vw' : '10vw')};
        border-radius: 50%;
        box-shadow: 0px 5px 8px 2px #00000020;
    `
    const Container = styled.div`
        //background-color: aqua;
        padding: 0.15vw;
        margin: 1vw;
        width: ${props.num === "1" ? '12.5vw' : (props.num === "2" ? '11vw' : '10vw')};
        height: ${props.num === "1" ? '18.75vw' : (props.num === "2" ? '16vw' : '15vw')};
        transition: ease-in-out 0.2s;
        overflow: hidden;
        &:hover{
            transform: scale(1.05);
            transition: ease-in-out 0.2s;
            cursor: pointer;
        }
    `
    const Num = styled.h1`
        color: black;
        opacity: ${props.num === "1" ? '100%' : (props.num === "2" ? '75%' : '50%')};
        font-size: ${props.num === "1" ? '3vw' : (props.num === "2" ? '2vw' : '1.5vw')};

    `

    return(
        <Container id="channelcontainer">
                <a href={props.channelLink} target="_blank" style={{textDecoration: "none"}} >
                <ChannelPic src={props.thumbnailUrl} ></ChannelPic>
                <Num>{props.num}.</Num>
                <Title>{props.title}</Title>
                </a>
        </Container>
    )
}