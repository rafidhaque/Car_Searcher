import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    searchItem: "",
  };

  onSearchSubmit = (term) => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
        },
        headers: {
          Authorization:
            "Client-ID FjS72IVU8WGKh5H05V4ygXHKCRxsKXLRsQJDV2cW6ho",
        },
      })
      .then((response) => {
        console.log(response);
      });
    this.setState({ searchItem: term });
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
