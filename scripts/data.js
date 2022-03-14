//here's where all the api keys and fetch's go
//place to fetch from
//   https://api.nasa.gov/planetary/apod?api_key=c8OI0NKEu3BMIeSuGIUSOm4v3NpKYM29LeAdwr7m
//modified to my b-day
//&date=2014-10-01
//   https://api.nasa.gov/planetary/apod?api_key=c8OI0NKEu3BMIeSuGIUSOm4v3NpKYM29LeAdwr7m&date=2014-06-26

export const picOfDay = () => {
    return fetch("https://api.nasa.gov/planetary/apod?api_key=c8OI0NKEu3BMIeSuGIUSOm4v3NpKYM29LeAdwr7m&date=2014-06-26")
    .then (response => response.json())
    .then(picture => picture)
}

export const BirthDayPicOfDay = (bDate) => {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=c8OI0NKEu3BMIeSuGIUSOm4v3NpKYM29LeAdwr7m&date=${bDate}`)
    .then (response => response.json())
    .then(picture => picture)
}