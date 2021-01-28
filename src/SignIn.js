/* global gapi */
import React from 'react'
import Button from '@material-ui/core/Button'
import FadeIn from 'react-fade-in'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import { Tooltip } from '@material-ui/core'

function SignIn(){
  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  
  function loadClient() {
    //mahad.rehan12@gmail.com
    gapi.client.setApiKey("AIzaSyAVeI6ru2lwrRYlYLENQ-mW-M8gy3n2QbM");
    //mahad.rehan@gmail.com
    //gapi.client.setApiKey("AIzaSyCyZMs647_OK9yVkF6BDsW0MGeSX30fjI8");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); execute() },

              function(err) { console.error("Error loading GAPI client for API", err); });

  }

  function execute() {
    //Gets Liked Videos
    var likedVideos = gapi.client.youtube.videos.list({
      "part": [
        "snippet,contentDetails"
      ],
      "maxResults": 50,
      "myRating": "like"
    })
    .then(function(response) {
      // Handle the results here (response.result has the parsed body).
      console.log("liked videos:", response);
      localStorage.setItem("likedVideos", JSON.stringify(response.result.items))
    },
    function(err) { console.error("Execute error", err); });

    //Gets UserActivity
    //var activity = gapi.client.youtube.activities.list({
      //"part": [
        //"snippet,contentDetails"
      //],
      //"maxResults": 50,
      //"mine": true
    //})
        //.then(function(response) {
                // Handle the results here (response.result has the parsed body).
                //console.log("Activity:", response);
              //},
              //function(err) { console.error("Execute error", err); });

    //gets Subscriptions
    return gapi.client.youtube.subscriptions.list({
      "part": [
        "snippet,contentDetails"
      ],
      "maxResults": 200,
      "mine": true
    })
    .then(function(response) {
            // Handle the results here (response.result has the parsed body).
            console.log("subscriptions", response.result.items);
            localStorage.setItem("subscriptions", JSON.stringify(response.result.items))
            window.location.href = '/Profile'
          },
      function(err) { console.error("Execute error", err); });
  }
  
  gapi.load("client:auth2", function() {
    //gapi.auth2.init({client_id: "186697755598-b6daknba23nai9kb2o4a2mb9r84kigmm.apps.googleusercontent.com"});
    gapi.auth2.init({client_id: "320940206041-kn3asuiagd19cnhuk4nd2slb7cgbfnds.apps.googleusercontent.com"});
  });

  const GitHub = styled.img` 
    width: 2vw;
    margin-left: 2vw;
    margin-top: 2.5vw;
    transition: ease-in-out 0.3s;
    opacity: 60%;
    &:hover{
      transform: scale(1.1);
      transition: ease-in-out 0.2s;
      cursor: pointer;
      opacity: 100%;
    }

  `
  return(
    
      <div>
        <img style={{width: "60vw", position: "absolute", top: "5%", zIndex: "-1", opacity:"5%"}} src="/images/icons/youtube logo.png" />
        <FadeIn transitionDuration="750" delay="250">
          <h1 style={{textAlign:"center", fontSize: "4vw", marginTop: "10%"}}>YouTube Profile Data</h1>
          <p style={{textAlign: "center", marginLeft: "26vw", marginRight: "26vw", fontSize: "1vw", opacity: "50%"}}>
            View your top channels on YouTube and visualize your personal watch data and channel
            statistics based on recent user activity. See your data and get a greater insight on
            how you spend your time on YouTube.
          </p>
          <Button onClick={() => {authenticate().then(loadClient)}} id="loginButton"  style={{float: "left", marginLeft: "45%", marginTop: "5vh", color: "white", backgroundColor: "#ff3d3d", width: "10vw", height: "2vw", fontSize: "0.5vw"}} variant="contained" >Sign In With YouTube</Button>
          <FadeIn delay="1000" duration="500">
            <a data-tip="View on GitHub" href="https://github.com/mahaaad/Youtube-Data-App" target="_blank">
              <GitHub src="/images/icons/github.png"></GitHub>
              <ReactTooltip backgroundColor="#00000030"/>
            </a>
          </FadeIn>
        </FadeIn>
        <h3 className="footer" >© Mahad Rehan 2021 | Designed and Developed by Mahad Rehan</h3>
      </div>
  )
}

export default SignIn