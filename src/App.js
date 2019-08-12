import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Item from './components/Item';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  //other Methods
  constructor() {
    super()
    this.state = {
      input: ""
    }
  }
  addItem = () => {
    this.props.store.addItem(this.state.input)
  }
  
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className="App">
        < DevTools />
        <input onChange={this.handleChange} name="input" value={this.state.value} />
        <button onClick={this.addItem}>Add</button>
        {this.props.store.list.map((i, ind) => <Item item={i}
          key={ind}
          store={this.props.store} />
        )}
      </div>
    );
  }
}

export default App;
