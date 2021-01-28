import React from 'react'
import styled from 'styled-components'
import ProfileInfo from './components/ProfileInfo'
import Channel from './components/Channel'
import Genre from './components/Genre'
//import Categories from './components/Youtube/Categories'
import FadeIn from 'react-fade-in'

var topGenres = []
var categories = []
//creates dictionary to count how many of each category
var watchedCategories = {}
//Dictionary of categoryIds and titles
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

const TopChannelsTitle = styled.h1` 
    font-size: 2vw;
    margin-bottom: 1vw;
    margin-left: 5vw;
    opacity: 70%;
`

const GenresTitle = styled.h1` 
    margin-top: 1vw;
    margin-bottom: 1vw;
    margin-left: 5vw;
    font-size: 2vw;
    opacity: 70%;
`
function sortCategories(){
    //create items array
    var items = Object.keys(watchedCategories).map(function(key){
        return [key, watchedCategories[key]]
    })
    //Sort array based on second element
    items.sort(function(first, second){
        return second[1] - first[1]
    })
    //create new array of genres
    var genres = []
    for (let i = 0; i < 9; i++){
        genres.push(items[i][0])
        //console.log("arr", genres[i])
    }
    localStorage.setItem("genres", JSON.stringify(genres))
    //create new array of components
    var arr = []
    for (let i = 0; i < 9; i++){
        arr.push(<Genre num={i+1} title={items[i][0] }/>)
    }

    return arr
}

export default function Profile(){
    var likedVideos = JSON.parse(localStorage.getItem("likedVideos"))
    console.log("liked videos: ", likedVideos)
    //loop builds watchedCategories dictionary 
    for (let i = 0; i < likedVideos.length; i++){
        //adds to categories dictionary
        var category = categoriesDict[Number(likedVideos[i].snippet.categoryId)]

        if(category in watchedCategories){
            watchedCategories[category] = watchedCategories[category] + 1

        }
        else{
            watchedCategories[category] = 0
        }
    }
    //sorts by most watched
    topGenres = sortCategories()
    //localStorage.setItem("genres", JSON.stringify(topGenres))

    var  data = JSON.parse(localStorage.getItem("subscriptions"))
    var channels = []

    for (var i = 0; i < data.length; i++){
        var channelLink = "https://youtube.com/channel/" + String(data[i].snippet.resourceId.channelId)
        var thumbnailUrl = String(data[i].snippet.thumbnails.high.url)
        channels.push(<Channel channelLink={channelLink} num={i+1+''} title={data[i].snippet.title} thumbnailUrl={thumbnailUrl}/>)
    }

    return(
        <div>
            <FadeIn  transitionDuration="1000" delay="250">
            <div style={{marginTop: "4vw", height: "15vw", width: "100vw"}}>
                <ProfileInfo 
                    channelLink = {data[0].snippet.channelId}
                />
            </div>

            <div className = "topchannels" >
                <TopChannelsTitle>Your Top Channels</TopChannelsTitle>
                <div><FadeIn delay="65">{channels.splice(0,14)}</FadeIn></div>
            </div>

            <div className = "genres" >
                <GenresTitle>Your Top Genres</GenresTitle>
                <div>{topGenres.splice(0,7)}</div>
            </div>
            </FadeIn>
        </div>
        
    )
}