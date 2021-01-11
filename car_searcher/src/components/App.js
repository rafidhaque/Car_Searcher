import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    searchItem: "",
  };

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID FjS72IVU8WGKh5H05V4ygXHKCRxsKXLRsQJDV2cW6ho",
      },
    });

    console.log(response.data.results[0].urls.full);
    this.setState({ searchItem: response.data.results[0].urls.full });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar userInput={this.onSearchSubmit} />
        <img
          alt="avatar"
          src={this.state.searchItem}
          width="500"
          height="600"
        />
      </div>
    );
  }
}

export default App;
