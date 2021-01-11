import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
    warning: "must be 4 letter",
  };

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
            <label>
              {this.state.term.length < 4 && this.state.term.length > 0
                ? "Type at least 4 characters"
                : ""}
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
