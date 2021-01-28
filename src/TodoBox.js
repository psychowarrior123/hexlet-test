import React from 'react';
import Item from './Items/Item';


export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    const items = [];
    this.state = { items, text: '' }
  }
  
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ text: value });
  }
  
  handleAdd = (e) => {
    e.preventDefault();
    const { items, text } = this.state;
    this.setState({ items: [{ id: `${Math.random()}_${text}` }, ...items], text: '' });
  }
  
  handleRemove = (id) => (e) => {
    e.preventDefault();
    const { items } = this.state;
    const newItems = items.filter((item) => item.id !== id);
    this.setState({ items: newItems });
  }
  
  render() {
    const { items, text } = this.state
    return (
      <div>
        <div className="mb-3">
          <form className="todo-form form-inline mx-3">
            <div className="form-group">
              <input
                type="text"
                value={text}
                required=""
                className="form-control mr-3"
                placeholder="I am going..."
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleAdd}>add</button>
          </form>
        </div>
        {items.map((item) => <Item task={item.id} onRemove={this.handleRemove} key={Math.random()} />)}
      </div>
    )
  }
}