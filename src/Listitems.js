import React from 'react'
import './Listitems.css'

const ListItems = props => {
  const items = props.items
  const listItems = items.map(item => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            className={item.complete ? 'listDon' : ''}
            type="text"
            id={item.key}
            value={item.text}
            onChange={event => {
              props.setUpdate(event.target.value, item.key)
            }}
          />
          <span className="tooltip">Click to edit</span>
        </p>
        <button className="delete" onClick={() => props.deleteItem(item.key)}>
          Delete
        </button>
        <button onClick={() => props.completeItem(item.key)}>
          {item.complete ? 'Undone' : 'Done'}
        </button>
      </div>
    )
  })
  return listItems
}

export default ListItems
