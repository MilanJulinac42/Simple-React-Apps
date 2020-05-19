import React, { Component } from "react";

class PomodoroApp extends Component {
  constructor() {
    super();
    this.state = {
      time: "",
      alert: "",
    };

    this.times = {
      defaultTime: 1500,
      shortBreak: 300,
      longBreak: 900,
    };
  }

  componentDidMount() {
    this.setState({ time: this.times.defaultTime });
  }

  startTimerDefault = () => {
    this.setState({ time: this.times.defaultTime, alert: "DEFAULT TIME" });

    this.startTimer(this.state.time);
  };

  startTimerShort = () => {
    this.setState({ time: this.times.shortBreak, alert: "SHORT TIME" });

    this.startTimer(this.state.time);
  };

  startTimerLong = () => {
    this.setState({ time: this.times.longBreak, alert: "LONG TIME" });

    this.startTimer();
  };

  startTimer = () => {
    clearInterval(this.interval);

    this.interval = setInterval(this.countTimer, 1000);
  };

  countTimer = () => {
    if (this.state.time !== 0) {
      this.setState({ time: this.state.time - 1 });
    } else {
      this.setState({ alert: "TIME'S UP!" });
    }
  };

  displayTimer(seconds) {
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);

    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  }

  render() {
    return (
      <div>
        <h1>POMODORO TIMER</h1>
        <h3>{this.displayTimer(this.state.time)}</h3>
        <h5>{this.state.alert}</h5>
        <button onClick={this.startTimerDefault}>START</button>
        <button onClick={this.startTimerShort}>SHORT</button>
        <button onClick={this.startTimerLong}>LONG</button>
      </div>
    );
  }
}

export default PomodoroApp;
