//MOBX

import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Fridges'},
            {id: 2, name: 'Smartphones'}
        ]
        this._brands = [
            {id: 1, name: 'Smasung'},
            {id: 2, name: 'Apple'} 
        ]

        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: '1200', rating: 5,  img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 2, name: "Iphone 12 pro", price: '1200', rating: 5,  img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 3, name: "Iphone 12 pro", price: '1200', rating: 5,  img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 4, name: "Iphone 12 pro", price: '1200', rating: 5,  img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'}
    ],
          
        makeAutoObservable(this)
    }


setTypes (types) {
    this._types = types
}

setBrands (brands) {
    this._brands = brands
}

setDevicex (devices) {
    this._devices = devices
}

get types() {
    return this._types
}

get brands() {
    return this._brands
}
get devices() {
    return this._devices
}

}