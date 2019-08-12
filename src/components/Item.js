import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = (e) => {
    const location = prompt("Please enter new location")
    const name = e.target.id
    this.props.store.editItem(name, location)
  }
  deleteItem = (e) => {
    console.log(e.target.id)
    this.props.store.deleteItem(e.target.id)
  }
  //other Methods
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}><input type="checkbox" onClick={this.checkItem}
        value={item.name} />
        {item.name} {item.location}
        <button onClick={this.editItem} id={item.name} class="editButton">Edit</button>
        <button onClick={this.deleteItem} id={item.name} class="deleteItem">Delete</button>
      </div>)
  }
}


export default Item