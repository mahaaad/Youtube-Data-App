import React from 'react'
import styled from 'styled-components'
import FadeIn from 'react-fade-in'

export default function Video(props){
    
    const Duration = styled.h1` 
    font-size: 1vw;
    color: white;
    background-color: #00000050;
    margin-top: -3.25vh;
    margin-left: 17vw;
    line-height: 1.5vh;
    padding: 0.25vw;
    padding-top: 0.1vh;
    border-radius:0.1vw;
    font-weight: lighter;
    visibility: ${props.duration == "" ? 'hidden' : 'visible'};
    position: absolute;
    `

    const Thumbnail = styled.img`
    object-fit: cover;
    width: 20vw;
    height: 11.2vw;
    z-index: -1;
    opacity: 100%;

    `
    const Title = styled.h1` 
    font-size: 1vw;
    font-weight: light;
    color: black;
    `
    const ChannelTitle = styled.h1` 
    font-size: 0.75vw;
    opacity: 50%;
    color: black;

    `

    function componentDidMount(channelId) {
        fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${channelId}&key=AIzaSyCyZMs647_OK9yVkF6BDsW0MGeSX30fjI8`)
            .then(response => response.json())
            .then(data =>{
                var photoLink = JSON.stringify(data)
                localStorage.setItem("photoLink", photoLink)
                //console.log("PHOTO", photoLink)
            });
    }
    var channelId = props.channelId
    //componentDidMount(channelId)

    var channelPhoto = localStorage.getItem("photoLink")
    return (
        <a href={props.VideoLink} target="_blank">
        <div className="video" style={{cursor: "pointer", width: "20vw",float: "left", margin: "1vw", overflow: "hidden"}}>
            <Thumbnail src={props.img}></Thumbnail>
            <div style={{height: "7.5vh", zIndex: "3", paddingRight: "0.5vw"}}>
                <Duration>{props.duration}</Duration>
                <FadeIn duration="500" delay="250">
                    <img src={channelPhoto} style={{width: "2vw",float: "left", borderRadius: "50%", padding: "0.25vw"}}/>
                    <div style={{float: "left", width: "16vw"}}>
                        <Title>{props.title}</Title>
                        <ChannelTitle>{props.channelTitle}</ChannelTitle>
                    </div>
                </FadeIn>
            </div>
        </div>
        </a>
    )
}