import React, { Component } from "react";

class CoinExchange extends Component {
  constructor() {
    super();

    this.state = {
      money: 0,
    };
  }

  shouldComponentUpdate(props, state) {
    return state.money % 10 === 0;
  }

  onValueChange = (e) => {
    this.setState({ money: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Coin Exchange</h1>
        <p>How much $ do you have?</p>
        <input
          type="text"
          value={this.state.money}
          onChange={this.onValueChange}
        />
        <p>Coin price: 10$</p>
        <p>You can buy {this.state.money / 10}</p>
      </div>
    );
  }
}

export default CoinExchange;
