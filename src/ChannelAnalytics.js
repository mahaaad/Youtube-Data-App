import React from 'react'
import styled from 'styled-components'
import FadeIn from 'react-fade-in'

function ChannelAnalytics(){
    const Title = styled.h1`
        margin-left: 7.5vw;
        margin-top: 4vw;
        margin-bottom: 2vw;
        font-size: 2vw;
        opacity: 70%;
    `

    return(
        <div>
        <FadeIn duration="2000">
            <Title>Channel Analytics</Title>
        </FadeIn>
        </div>
    )
}

export default ChannelAnalytics