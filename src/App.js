import React, { Component } from "react";
import "./App.css";
import Todo from "./apps/todo-app/Todo";
import PomodoroApp from "./apps/pomodoro-timer-app/PomodoroApp";
import CoinExchange from "./apps/coin-exchange-app/CoinExchange";
import Notes from "./apps/notes-app/Notes";
import Animation from "./apps/animation-app/Animation";

import { notes1, notes2 } from "./apps/notes-app/data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: notes1,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ notes: notes2 });
    }, 10000);
  }

  render() {
    return (
      <div className="App">
        <Animation />
      </div>
    );
  }
}
export default App;
