import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import config from './config'

const ViewCounter = () => {
    
const Counter = styled.h1`
    font-size: 1.5vw;
    color: rgb(111,111,111);
    font-Weight: lighter;
    opacity: 50%;
  `
const [viewCount, setViewCount] = useState()

useEffect(() => {
    const { api_key, channel_id} = config
    const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel_id}&key=${api_key}`
    fetch(apiCall)
    .then(result => result.json())
    .then(data => {
            const count = data.items[0].statistics.viewCount
            setViewCount(count)
        })
    })
    return (
        <div>
            <Counter>{viewCount} Views</Counter>
        </div>
    )
}

export default ViewCounter