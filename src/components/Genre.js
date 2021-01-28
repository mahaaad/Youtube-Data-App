import React from 'react'
import styled from 'styled-components'

export default function Genre(props){
    var categoriesDict = {
        "Film & Animation": "/images/icons/Movies.png",
        "Autos & Vehicles": "",
        "Music": "/images/icons/music.jpg",
        "Pets & Animals": "",
        "Sports": "",
        "Short Movies": "",
        "Travel & Events": "",
        "Gaming": "/images/icons/gaming.jpg",
        "Videoblogging": "",
        "People & Blogs": "/images/icons/People & Blogs.png",
        "Comedy": "",
        "Entertainment": "",
        "News & Politics": "",
        "Howto & Style": "",
        "Education": "/images/icons/Education.png",
        "Science & Technology": "",
        "Nonprofits & Activism": "",
        "Movies": "/images/icons/Movies.png",
        "Anime/Animation": "",
        "Action/Adventure": "",
        "Classics": "",
        "Comedy": "",
        "Documentary": "",
        "Drama": "",
        "Family": "",
        "Foreign": "",
        "Horror": "",
        "Sci-Fi/Fantasy": "",
        "Thriller": "",
        "Shorts": "",
        "Shows": "",
        "Trailers": "",
    }
    
    const Genre = styled.div`
        //background-color: aqua;
        width: ${props.num === 1 ? '13vw' : (props.num === 2 ? '11vw' : '10vw')};
        height: ${props.num === 1 ? '18.75vw' : (props.num === 2 ? '16vw' : '13vw')};
        margin: 1vw;
        margin-top: ${props.num === 1 ? '2vw' : (props.num === 2 ? '4vw' : '5vw')};
        float: left;
        transition: ease-in-out 0.2s;
        &:hover{
            transition: ease-in-out 0.2s;
            transform: scale(1.05);
            cursor: default;
        }
    `

    const GenreIcon = styled.img` 
        border-radius: 50%;
        width: ${props.num === 1 ? '13vw' : (props.num === 2 ? '11vw' : '10vw')};
        height: ${props.num === 1 ? '13vw' : (props.num === 2 ? '11vw' : '10vw')};
        box-shadow: 0px 5px 8px 2px #00000020;
    `
    const Title = styled.h1` 
        font-size: ${props.num === 1 ? '1.75vw' : (props.num === 2 ? '1.5vw' : '1.25vw')};
        text-align: center;
    `
    return(
        <Genre>
            <GenreIcon src={categoriesDict[props.title]}/>
            <Title>{props.num + ". "}{props.title}</Title>
        </Genre>
    )
}