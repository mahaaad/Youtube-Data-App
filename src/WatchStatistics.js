import React from 'react'
import styled from 'styled-components'
import FadeIn from 'react-fade-in'
import axios from 'axios'

import BarGraph from './components/Graphs/BarGraph'
import BarChart from './components/Graphs/BarChart'
import LineChart from './components/Graphs/LineChart'
import DonutChart from './components/Graphs/DonutChart'
import { duration } from '@material-ui/core'

var subs = JSON.parse(localStorage.getItem("subscriptions"))

var likedVideos = JSON.parse(localStorage.getItem("likedVideos"))
//console.log("liked videos: ", likedVideos)

var topGenres = JSON.parse(localStorage.getItem("genres"))

var watchTimeByChannel = {}

var watchTimebyGenre = {}

var categoriesDict = {
    1: "Film & Animation",
    2: "Autos & Vehicles",
    10: "Music",
    15: "Pets & Animals",
    17: "Sports",
    18: "Short Movies",
    19: "Travel & Events",
    20: "Gaming",
    21: "Videoblogging",
    22: "People & Blogs",
    23: "Comedy",
    24: "Entertainment",
    25: "News & Politics",
    26: "Howto & Style",
    27: "Education",
    28: "Science & Technology",
    29: "Nonprofits & Activism",
    30: "Movies",
    31: "Anime/Animation",
    32: "Action/Adventure",
    33: "Classics",
    34: "Comedy",
    35: "Documentary",
    36: "Drama",
    37: "Family",
    38: "Foreign",
    39: "Horror",
    40: "Sci-Fi/Fantasy",
    41: "Thriller",
    42: "Shorts",
    43: "Shows",
    44: "Trailers",
}

function totalWatchTime(){
    var minutes = 0
    var seconds = 0
    for (let i = 0; i < likedVideos.length; i++){
        let time = 0
        let duration = likedVideos[i].contentDetails.duration
        if(duration.includes('M')){
            var tempMinutes = duration.substring(2, duration.indexOf('M'))
            if(tempMinutes !== "PT"){
                minutes += parseInt(tempMinutes)
                time += parseInt(tempMinutes)
                //console.log("minutes: ", temp)
            }
        }
        //seconds
        var tempSeconds = duration.substring(duration.indexOf('M')+1, duration.length-1)

        if(tempSeconds.includes('M') == false){
            if(tempSeconds.includes('PT')){
                tempSeconds = tempSeconds.substring(2,tempSeconds.length)
            }
            if(tempSeconds !== "P0"){
                //console.log("seconds: ", temp)
                seconds += parseInt(tempSeconds)
                time += parseInt(tempSeconds)/60
            }
        }

        //get watch time by channel
        //get watch time by genre
        let title = likedVideos[i].snippet.channelTitle
        let genre = categoriesDict[likedVideos[i].snippet.categoryId]
        //console.log(title, time)
        //console.log(genre, time)
        if(title in watchTimeByChannel){
            watchTimeByChannel[title] = watchTimeByChannel[title] + time
        }
        else{
            watchTimeByChannel[title]=time
        }

        if(genre in watchTimebyGenre){
            watchTimebyGenre[genre] = watchTimebyGenre[genre] + time
        }
        else{
            watchTimebyGenre[genre]=time
        }
    }

    //console.log("Minutes:" , minutes, "Seconds:", seconds)
    let totalTime = (minutes + seconds/60)/60
    return [totalTime.toFixed(2),watchTimeByChannel,watchTimebyGenre]
}

function sort(list){
    //create items array
    var items = Object.keys(list).map(function(key){
        return [key, list[key]]
    })
    //Sort array based on second element
    items.sort(function(first, second){
        return second[1] - first[1]
    })
    //create new array
    var arr = []
    for (let i = 0; i < Object.keys(list).length; i++){
        arr.push(items[i])
        //console.log("arr", genres[i])
    }


    return arr
}

function WatchStatistics(){

    const Title = styled.h1`
        margin-left: 7.5vw;
        margin-top: 4vw;
        margin-bottom: 2vw;
        font-size: 2vw;
        opacity: 70%;
    `
    const GraphTitle = styled.h1` 
        font-size: 1vw;
        padding: 0.5vw;
    `
    const Hr = styled.hr` 
        opacity: 50%;
        margin-top: 1vw;

    `   

    var totalTime = totalWatchTime()[0]
    //console.log("total time: ", totalTime)
    var channelTime = totalWatchTime()[1]
    //console.log("channel Time: ", channelTime)
    //console.log(channelTime["Ryan Reynolds"])
    var genreTime = totalWatchTime()[2]
    //console.log("genre Time: ", genreTime)

    //search for most watched channel
    var mostWatchedKey = Object.keys(channelTime)[0]
    for (let key in channelTime){
        if(channelTime[key] > channelTime[mostWatchedKey]){
            mostWatchedKey = key
        }
    }
    //search for most watched genre
    var mostWatchedGenreKey = Object.keys(genreTime)[0]
    for (let key in genreTime){
        if(genreTime[key] > genreTime[mostWatchedGenreKey]){
            mostWatchedGenreKey = key
        }
    }
    return(
    <div>
        <FadeIn duration="2000">
        <Title>Watch Statistics</Title>
        <div style={{float: "left", marginLeft: "6vw", width: "44vw", height: "30vw"}}>
            <div className="graphcontainer" style={{width: "16vw", height: "11vw",  float: "left"}}>
                {/*TOTAL TIME WATCHED */}
                <h1 style={{fontSize: "1vw", opacity: "60%"}}>Est. Total Time Watched</h1>
                <Hr />
                <h1 style={{fontWeight: "500", fontSize: "4vw", opacity: "75%", marginLeft: "0.25vw"}}>
                    {totalTime+"h"}
                </h1>
                <h1 style={{fontSize: "0.5vw", opacity: "40%"}}>*From 50 Most Recent Liked Videos</h1>
            </div>
            {/*VIDEOS WATCHED */}
            <div className="graphcontainer" style={{width: "16vw", height: "11vw", float: "left"}}>
                <h1 style={{fontSize: "1vw", opacity: "60%"}}>Est. Videos Watched</h1>
                <Hr />
                <h1 style={{fontWeight: "500", fontSize: "4vw", opacity: "75%", marginLeft: "0.25vw"}}>
                    34
                </h1>
                <h1 style={{fontSize: "0.5vw", opacity: "40%"}}>*In the past 30 days</h1>
            </div>
            {/* MOST WATCHED CHANNEL*/}
            <div className="graphcontainer" style={{width: "16vw", height: "11vw",  float: "left"}}>
                <h1 style={{fontSize: "1vw", opacity: "60%"}}>Most Watched Channel</h1>
                <Hr />
                <h1 style={{fontStyle: "italic", fontWeight: "500", fontSize: "2.5vw", textAlign: "center", marginBottom: "0.5vw", opacity: "75%", marginLeft: "0.25vw"}}>
                    {mostWatchedKey}
                </h1>
                <h1 style={{fontSize: "0.5vw", opacity: "40%"}}>*From 50 Most Recent Liked Videos</h1>
            </div>
            {/* MOST WATCHED GENRE*/}
            <div className="graphcontainer" style={{width: "16vw", height: "11vw", float: "left"}}>
                <h1 style={{fontSize: "1vw", opacity: "60%"}}>Most Watched Genre</h1>
                <Hr />
                <h1 style={{fontWeight: "500", fontSize: "3vw", opacity: "75%", marginLeft: "0.25vw"}}>
                    {mostWatchedGenreKey}
                </h1>
                <h1 style={{fontSize: "0.5vw", opacity: "40%"}}>*In the past 30 days</h1>
            </div>
        </div>
        <div className="graphcontainer" style={{marginLeft: "-1vw", width: "23vw", height: "26vw",display:"inline-block"}} >
            <GraphTitle style={{float: "left"}}>Est. Watch Time by Channel</GraphTitle >
            <h1 style={{fontSize: "0.5vw", opacity: "50%", padding:"0.85vw"}}>(minutes)</h1>
            <BarChart data={channelTime}/>
        </div>

        <div className="graphcontainer" style={{marginLeft: "6vw", width: "40vw", height: "23.5vw", float: "left"}}>
            < GraphTitle >Total Watch Time</GraphTitle >
            <LineChart />
        </div>

        <div className="graphcontainer" style={{marginLeft: "1vw", width: "20vw", height: "23.5vw", display: "inline-block"}}>
            <GraphTitle>Est. Time Watched Per Genre</GraphTitle>
            <DonutChart genres={topGenres} genreTime={genreTime}/>
        </div>

    </FadeIn>
    </div>
)
}

export default WatchStatistics