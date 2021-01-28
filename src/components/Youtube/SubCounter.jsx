import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import config from './config'

const SubCounter = () => {
    
const Counter = styled.h1`
    font-size: 1.5vw;
    color: red;
    font-Weight: lighter;
    opacity: 50%;
  `
const [subscriberCount, setSubscriberCount] = useState()

useEffect(() => {
    const { api_key, channel_id} = config
    const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel_id}&key=${api_key}`
    fetch(apiCall)
    .then(result => result.json())
    .then(data => {
            const count = data.items[0].statistics.subscriberCount
            setSubscriberCount(count)
        })
    })
    return (
        <div>
            <Counter>{subscriberCount} Subscribers</Counter>
        </div>
    )
}

export default SubCounter