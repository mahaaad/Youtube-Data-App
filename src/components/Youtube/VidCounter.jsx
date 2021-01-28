import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import config from './config'

const VidCounter = () => {
    
const Counter = styled.h1`
    font-size: 1.5vw;
    color: rgb(111,111,111);
    font-Weight: lighter;
    opacity: 50%;
 `
const [vidCount, setVidCount] = useState()

useEffect(() => {
    const { api_key, channel_id} = config
    const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel_id}&key=${api_key}`
    fetch(apiCall)
    .then(result => result.json())
    .then(data => {
            const count = data.items[0].statistics.videoCount
            setVidCount(count)
        })
    })
    return (
        <div>
            <Counter>{vidCount} Videos</Counter>
        </div>
    )
}

export default VidCounter