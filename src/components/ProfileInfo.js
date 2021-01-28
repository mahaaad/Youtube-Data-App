import React from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import FadeIn from 'react-fade-in'
import ProfilePhoto from './Youtube/ProfilePhoto'
import UserName from './Youtube/UserName'
import SubCounter from './Youtube/SubCounter'
import VidCounter from './Youtube/VidCounter'
import ViewCounter from './Youtube/ViewCounter'

const YoutubeLink = styled.img`
    width: 1vw;
    margin-top: 6vh;
    transition: ease-in-out 0.2s;
    opacity: 50%;
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
        transition: ease-in-out 0.2s;
        opacity: 80%;
    }
`


function ProfileInfo(props){
    var channelUrl=`http://youtube.com/channel/${props.channelLink}`
     return(
        <div className="profileinfo" style={{paddingLeft: "37.5%", height: "17.5vw", width:"100%",}}>
            <ProfilePhoto />
            <div style={{float: "left", marginLeft: "1vw"}}>
                <FadeIn delay="150">
                    <UserName  />
                    <SubCounter />
                    <ViewCounter />
                    <VidCounter />
                </FadeIn>
            </div>
            <a data-tip="View Channel on Youtube" href={channelUrl} target="_blank">
            <YoutubeLink src="./images/icons/link.png" />
            <ReactTooltip />
            </a>
        </div>
     )
 }
export default ProfileInfo