import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import Selected from './Selected'
import Settings from './Settings'

var opened = false;

function navBarClick(){
    if(opened == false){
        document.getElementById("navbar").style.width = "15vw"
        document.getElementById("box").style.width = "15vw"
        opened = true;
    }
    else{
        document.getElementById("navbar").style.width = "3vw"
        document.getElementById("box").style.width = "3vw"
        opened = false;
    }
}

function closeNav(iconId){
    var element = document.getElementById(iconId)
    var px = (100 / [document.documentElement.clientWidth] )
    document.getElementById("box").style.top = (element.offsetTop)*px+"vw"
    document.getElementById("box").style.width = "3vw"
    window.scrollTo(0, 0)
    document.getElementById("navbar").style.width = "3vw"
    opened = false
}

function Navbar(props){
    var path = useLocation().pathname
    const Nav = styled.div` 
        display: ${path !== "/" ? 'block' : 'none'};
    `
    
    const Navlink = styled.h1`
        font-size: 1vw;
        margin-top: 1vw;
    `
    const MenuButton = styled.img`
        z-index: 5;
        opacity: 60%;
        padding: 0.85vw;
        width: 1.15vw;
        transition: ease-in-out 0.2s;
        cursor: pointer;
        &:hover{
            opacity: 100%;
            transition: ease-in-out 0.2s;
        }
    `
    
    return(
        <Nav className="navbar" id="navbar">
            <MenuButton id = "menuicon" src="./images/icons/menu.png" onClick={navBarClick} />
            <Selected />
            <Link to="/Profile"  style={{ textDecoration: 'none' }}>
            <div id="profileicon" className = "navlink" onClick={()=> closeNav("profileicon")}>
                <img className="navbaricon"  src="./images/icons/profile.png" />
                <Navlink className="navlinktext"> Profile</Navlink>
            </div>
            </Link>

            <Link to="/ChannelAnalytics" style={{ textDecoration: 'none' }}>
            <div id="analyticsicon" className = "navlink" onClick={()=> closeNav("analyticsicon")}>
                <img className="navbaricon" src="./images/icons/analytics.png" />
                <Navlink  className="navlinktext">Channel Analytics</Navlink>
            </div>
            </Link>

            <Link to="/WatchStatistics" style={{ textDecoration: 'none' }}>
            <div id="statsicon" className = "navlink" onClick={()=> closeNav("statsicon")}>
                <img className="navbaricon" src="./images/icons/youtube logo.png" />
                <Navlink className="navlinktext">Watch Statistics</Navlink>
            </div>
            </Link>

            <Link to="/RecentActivity" style={{ textDecoration: 'none' }}>
            <div id="activityicon" className = "navlink" onClick={()=> closeNav("activityicon")}>
                <img className="navbaricon" src="./images/icons/recent.png" />
                <Navlink className="navlinktext">Recent Activity</Navlink>
            </div>
            </Link>
            <Settings />

        </Nav>
    )
}

export default Navbar