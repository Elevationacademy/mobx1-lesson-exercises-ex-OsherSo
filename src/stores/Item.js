import { observable } from 'mobx'

export class Item {
    @observable name
    @observable location = "Super Sell"
    @observable completed = false
    constructor(name) {
        this.name = name
    }
}