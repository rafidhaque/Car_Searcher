import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    searchItem: "",
  };

  onSearchSubmit = (strr) => {
    console.log(strr);
    this.setState({ searchItem: strr });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar userInput={this.onSearchSubmit} />
        <p>{this.state.searchItem}</p>
      </div>
    );
  }
}

export default App;
