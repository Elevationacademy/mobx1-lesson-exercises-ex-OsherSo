import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    @action addItem = (name) => {
        this.list.push(new Item(name))
    }
    @action editItem = (itemName, newLocation) => {
        this.list.find(l => l.name === itemName).location = newLocation
    }
    @action deleteItem = (itemName) => {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].name === itemName) {
                this.list.splice(i, 1)
            }
        }
    }
}

