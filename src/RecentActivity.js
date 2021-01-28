import React from 'react'
import styled from 'styled-components'
import Video from './components/Video'
import FadeIn from 'react-fade-in'


function setDuration(duration){
    if(duration.includes('D')){
        duration = ""
    }
    else{
        duration = duration.substring(2,duration.length - 1)
        if(duration.includes('M') == false){
        duration = "0: " + duration
        }
        else{
            if(duration.charAt(2) == 'M'){
                if(duration.length == 4){
                    duration = duration.substring(0,2) + ":0" + duration.substring(duration.length-1)
                }
                else{
                    duration = duration.substring(0,2) + ": " + duration.substring(duration.length-2,duration.length)
                }
            }
            else{
                if(duration.length == 4){
                    duration = duration.substring(0,1) + ": " + duration.substring(duration.length-2, duration.length)
                }
                else if(duration.length == 3){
                    duration = duration.substring(0,1) + ":0" + duration.substring(duration.length-1, duration.length)
                }
                else{
                    duration = duration.substring(0,2) + ": " + duration.substring(duration.length-2,duration.length)
                }
            }
        }
    }
    return duration
}

function RecentActivity(){
    const Title = styled.h1` 
        margin-left: 8.5vw;
        margin-top: 4vw;
        margin-bottom: vw;
        font-size: vw;
        opacity: 60%;

    `
    //gets likedvideos list from local storage
    var likedVideos = JSON.parse(localStorage.getItem("likedVideos"))
    console.log("liked videos: ", likedVideos)

    //creates array to store video components
    var videos = []

    //loops builds array of recent videos
    for (var i = 0; i < likedVideos.length; i++){

        //gets duration of video
        var duration = setDuration(duration = String(likedVideos[i].contentDetails.duration))
        //gets video title
        var title = likedVideos[i].snippet.title
        //adds elipses if longer than 50 characters
        if(title.length > 50){
            title=title.substring(0,50) + "..."
        }
        //get channel id
        var channelId = likedVideos[i].snippet.channelId
        //console.log("CHANNEL ID", channelId)
        
        //add to component array
        videos.push(
        <Video 
            channelId = {channelId}
            duration={duration}
            img={likedVideos[i].snippet.thumbnails.high.url}
            title={title}
            channelTitle={likedVideos[i].snippet.channelTitle}
            VideoLink={`https://youtube.com/watch?v=${likedVideos[i].id}`}
        />
        )
    }
    //displays message if there is no recent activity
    if(videos == []){
        videos = [<h1>{"No recent Activity"}</h1>]
    }
    return(
        <div>
            <FadeIn duration="1000">
                <Title>Recent Activity</Title>
            </FadeIn>
                <div style={{marginLeft: "7.5vw", width: "90%"}}>
                    <FadeIn duration="1000" delay="75">{videos}</FadeIn>
                </div>

        </div>
    )

}

export default RecentActivity