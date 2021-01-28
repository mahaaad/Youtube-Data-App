import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import config from './config'

const Categories = () => {

const [category, setCategory] = useState()

useEffect(() => {
    const { api_key } = config
    const apiCall = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${api_key}`
    fetch(apiCall)
    .then(result => result.json())
    .then(data => {
            //array for rendering
            var arr = []
            //array for local storage
            var storageArr = []
            for (let i = 0; i < data.items.length; i++){
                storageArr.push(data.items[i].snippet.title)
                arr.push(<h1 style={{float: "left", margin: "1vw"}}>{data.items[i].snippet.title}</h1>)
            }
            console.log(storageArr)
            localStorage.setItem("categories", JSON.stringify(storageArr))
            setCategory(arr)

        })
    })

    return (
        <div>
            {category}
        </div>
    )
}

export default Categories