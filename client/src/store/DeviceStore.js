//Inventory MOBX

import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = [
            {id: 1, name: 'Smasung'},
            {id: 2, name: 'Apple'} ,
            {id: 3, name: 'Lenovo'} ,
            {id: 4, name: 'Asus'} ,
        ]

        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: '1200', rating: 5,  img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 2, name: "Iphone 12 pro", price: '1200', rating: 5,  img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 3, name: "Iphone 12 pro", price: '1200', rating: 5,  img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 4, name: "Iphone 12 pro", price: '1200', rating: 5,  img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'}
    ],

        this._selectedType = {}
        this._selectedBrand = {}
          
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

setSelectedType(type) {
       this._selectedType = type
}
setSelectedBrand(brand) {
    this._selectedType = brand
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

get selectedType() {
    return this._selectedType
}
get selectedBrand() {
    return this._selectedBrand
}
}