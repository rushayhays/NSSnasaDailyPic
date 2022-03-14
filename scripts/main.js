// here we bring in the API having function and work magic
// to get it on the DOM

import { picOfDay } from "./data.js";
import { BirthDayPicOfDay } from "./data.js"

// const todaysPic =  picOfDay()
// console.log(todaysPic)
// console.log(todaysPic.media_type)

picOfDay().then(todaysPic => {
    let picInsertPoint =  document.querySelector(".imageHere")
    let captionInsertPoint =  document.querySelector(".figCap")
    let picInfoInsertPoint = document.querySelector(".infoAboutPic")
    picInsertPoint.innerHTML = `<image src="${todaysPic.url}" alt="SPAAAAAACE" style="max-height: 400px;">`
    captionInsertPoint.innerHTML = `<figcaption>${todaysPic.title}</figcaption>`
    picInfoInsertPoint.innerHTML = `<blockquote>${todaysPic.explanation}</blockquote>`
    console.log(todaysPic.media_type)
})

let navElement = document.querySelector(".dateBox")
navElement.addEventListener("change", (event) => {
	BirthDayPicOfDay(event.target.value).then(todaysPic => {
        let picInsertPoint =  document.querySelector(".imageHere")
        let captionInsertPoint =  document.querySelector(".figCap")
        let picInfoInsertPoint = document.querySelector(".infoAboutPic")
        picInsertPoint.innerHTML = `<image src="${todaysPic.url}" alt="SPAAAAAACE" style="max-height: 400px;">`
        captionInsertPoint.innerHTML = `<figcaption>${todaysPic.title}</figcaption>`
        picInfoInsertPoint.innerHTML = `<blockquote>${todaysPic.explanation}</blockquote>`
        console.log(todaysPic.media_type)
    })
})