import React, { Component } from "react";
import moment from "moment";

const formatTime = "YYYY-MM-DD HH:mm:ss";

class Notes extends Component {
  constructor() {
    super();

    this.state = {
      lastUpdated: moment().format(formatTime).toString(),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notes !== this.props.notes) {
      this.setState({ lastUpdated: moment().format(formatTime).toString() });
    }
  }

  render() {
    const { notes } = this.props;
    return (
      <div className="Notes">
        <h1>Notes:</h1>

        <ul>
          {notes.map((note, key) => (
            <li key={key}>
              {note.title} - {note.content}
            </li>
          ))}
        </ul>

        <p>
          Last Update: <strong>{this.state.lastUpdated}</strong>
        </p>
      </div>
    );
  }
}

export default Notes;
