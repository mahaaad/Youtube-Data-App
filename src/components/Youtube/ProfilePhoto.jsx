import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import config from './config'

const ProfilePhoto = () => {

const Pic = styled.img`
    float: left;
    margin-left: 2vw;
    margin-top: 2vw;
    width: 12.5vw;
    border-radius: 50%;
 `
const [photo, setPhoto] = useState()

useEffect(() => {


    const { api_key, channel_id} = config
    const apiCall = 
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channel_id}&key=${api_key}`
    fetch(apiCall)
    .then(result => result.json())
    .then(data => {
            const img = data.items[0].snippet.thumbnails.high.url
            setPhoto(img)
        })
    })
    return (
        <div>
            <Pic src={photo}></Pic>
        </div>
    )
}

export default ProfilePhoto