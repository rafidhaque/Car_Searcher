import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
    warning: "must be 4 letter",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.userInput(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form
          onSubmit={(event) => {
            this.onFormSubmit(event);
          }}
          className="ui form"
        >
          <div className="field">
            <label>Search Image</label>
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
