import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    searchItem: "",
    images: [],
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    console.log(response.data.results[0].urls.full);
    this.setState({ searchItem: response.data.results[0].urls.full });
    this.setState({ images: response.data.results });
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
        <p>Found: {this.state.images.length} images</p>
      </div>
    );
  }
}

export default App;
