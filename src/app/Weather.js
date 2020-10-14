export class Weather {

    constructor(city){
        this.apiKey = '7769df492db2a8854a6ae56462f5121f'
        this.city = city
    }

    async getWeather(){
        const URI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`
        const response = await fetch(URI)
        const data = await response.json()
        return data
    }
}