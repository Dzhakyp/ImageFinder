import React, { Component } from "react";
import { createPortal } from "react-dom";

const myBar = document.getElementById("header");

export default class Searchbar extends Component {
  state = {
    query: "",
  };
  onSubmit = (e) => {
    const { query } = this.state;
    e.preventDefault();
    this.props.onSubmit(query);
    this.setState({ query: "" });
    this.reset();
  };
  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };
  reset = () => {
    this.setState({ query: "" });
  };
  render() {
    return createPortal(
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmit}>
          <button type="button" className="SearchForm-button">
            <span className="SearchForm-button-label"></span>
          </button>
          <input
            value={this.state.query}
            onChange={this.handleChange}
            className="SearchForm-input 
              "
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>,
      myBar
    );
  }
}
