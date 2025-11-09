import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

class ClassTextInputLogger extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = { inputValue: "" };

    // Binding `this` for handleClick
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleClick() {
    console.log("Button Clicked! Current Input:", this.state.inputValue);
  }

  render() {
    const { theme } = this.context;

    const styles = {
      backgroundColor: theme.background,
      color: theme.text,
      padding: "20px",
      borderRadius: "10px",
      marginTop: "20px",
      textAlign: "center",
    };

    return (
      <div style={styles}>
        <h2>Text Input Logger (Class Component)</h2>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Type something..."
          style={{ padding: "10px", fontSize: "16px", marginTop: "10px" }}
        />
        <button
          onClick={this.handleClick}
          style={{
            padding: "10px 20px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          Log Current Input
        </button>
        <p>Current Input: {this.state.inputValue}</p>
      </div>
    );
  }
}

export default ClassTextInputLogger;
