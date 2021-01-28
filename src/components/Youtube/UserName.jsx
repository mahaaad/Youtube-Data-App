import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import config from './config'

const UserName = () => {

const Name = styled.h1`
    margin-top: 3vw;
    font-size: 3vw;
 `
const [name, setName] = useState()

useEffect(() => {
    const { api_key, channel_id} = config
    const apiCall = 
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channel_id}&key=${api_key}`
    fetch(apiCall)
    .then(result => result.json())
    .then(data => {
            const txt = data.items[0].snippet.title
            setName(txt)
        })
    })
    return (
        <div>
            <Name>{name}</Name>
        </div>
    )
}

export default UserName