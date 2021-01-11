import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
    warning: "must be 4 letter",
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>{this.state.term.length < 4 ? "must be 4" : ""}</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
