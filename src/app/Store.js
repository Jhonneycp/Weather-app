export class Store {

    constructor(){
        this.city
        this.defaultCity= 'London'
    }

    getLocationData(city){
        if(localStorage.getItem('city') == null){
            this.city = this.defaultCity
        } else {
            this.city = JSON.parse(localStorage.getItem('city'))
        }

        return{
            city: this.city
        }
    }

    setLocationData(city){
        localStorage.setItem('city', city)
    }
}