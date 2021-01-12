import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

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
        <p>
          <ImageList images={this.state.images} />
        </p>
      </div>
    );
  }
}

export default App;
