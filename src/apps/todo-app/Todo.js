import React, { Component } from "react";
import List from "./List";

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      items: [],
      completed: [],
    };
  }

  onRemove = (id) => {
    const newArray = this.state.items;
    newArray.splice(id, 1);

    this.setState({
      items: newArray,
    });
  };

  onCompleted = (id) => {
    this.setState({
      completed: [...this.state.completed, this.state.items.splice(id, 1)],
    });
    this.onRemove(id);
  };

  handleOnChange = (e) => {
    this.setState({ task: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.setState({
      task: "",
      items: [...this.state.items, this.state.task],
    });
  };

  render() {
    return (
      <div>
        <h1>New Task</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.task}
            onChange={this.handleOnChange}
          />
          <button type="submit">ADD</button>
        </form>
        <List
          items={this.state.items}
          remove={this.onRemove}
          completed={this.onCompleted}
        />
        <List
          items={this.state.completed}
          remove={this.onRemove}
          completed={this.onCompleted}
        />
      </div>
    );
  }
}

export default Todo;
