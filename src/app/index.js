const { Weather } = require('./Weather')
const { UI } = require('./UI')
const { Store } = require('./Store')

const ui = new UI()
const store = new Store()
const  { city } = store.getLocationData()
const weather = new Weather(city)
require('./index.css')

async function fetchWeather(){
    const data = await weather.getWeather()
    console.log(data)
    ui.render(data)
}

document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    console.log(city)
    weather.changeLocation(city)

    e.preventDefault()
    fetchWeather()
})
document.addEventListener('DOMContentLoaded', fetchWeather())