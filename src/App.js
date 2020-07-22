/* eslint-disable array-callback-return */
import React from 'react'
import './App.css'
import ListItems from './Listitems'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        complete: false,
      },
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.setUpdate = this.setUpdate.bind(this)
    this.completeItem = this.completeItem.bind(this)
  }

  handleInput(event) {
    this.setState({
      currentItem: {
        text: event.target.value,
        key: Date.now(),
        complete: false,
      },
    })
  }

  addItem(event) {
    event.preventDefault()
    const newItem = this.state.currentItem
    console.log(newItem)
    if (newItem.text !== '') {
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: '',
          complete: false,
        },
      })
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key)
    this.setState({
      items: filteredItems,
    })
  }

  setUpdate(text, key) {
    const items = this.state.items
    // eslint-disable-next-line array-callback-return
    items.map(item => {
      if (item.key === key) {
        item.text = text
      }
    })
    this.setState({
      items: items,
    })
  }
  completeItem(key) {
    const items = this.state.items
    items.map(item => {
      if (item.key === key) {
        item.complete = !item.complete
      }
    })
    this.setState({
      items: items,
    })
  }

  render() {
    return (
      <div className="App" onSubmit={this.addItem}>
        <form id="to-do-form">
          <input
            type="text"
            placeholder="Enter Text"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          />
          <button type="submit">Add</button>
        </form>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
          completeItem={this.completeItem}
        />
      </div>
    )
  }
}

export default App
