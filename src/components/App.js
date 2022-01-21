import React from "react";
import yelp from "../apis/yelp";
import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { businesses: [] };

  componentDidMount() {
    this.onFormSubmit("restaurants", "usa");
  }

  onFormSubmit = async (searchTerm, searchLocation) => {
    const response = await yelp.get("/search", {
      headers: {
        Authorization:
          "Bearer VFBNfuZfpWbHVgCCpEPwZo4Sh-F-52iRGaHDLE2tft5xas2BBCcDl4u2JNQ-8Bc7LGsY9ttr4h5mKIPUg-zAIlCmSUCuOgVEcGOCmrfaVvhbWh6ZJa_TDumqaDzZYXYx",
      },
      params: {
        limit: 50,
        format: "json",
        origin: "*",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type,Authorization",
        "Access-Control-Allow-Methods": "GET",
        term: searchTerm,
        location: searchLocation,
      },
    });
    this.setState({ businesses: response.data.businesses });
    //console.log(response.data.businesses[0].location);
  };

  getRating = (rating) => {
    switch (rating) {
      case 0.5: {
        return "rating-half";
      }
      case 1: {
        return "rating-one";
      }
      case 1.5: {
        return "rating-one-half";
      }
      case 2: {
        return "rating-two";
      }
      case 2.5: {
        return "rating-two-half";
      }
      case 3: {
        return "rating-three";
      }
      case 3.5: {
        return "rating-three-half";
      }
      case 4: {
        return "rating-four";
      }
      case 4.5: {
        return "rating-four-half";
      }
      case 5: {
        return "rating-five";
      }
      default:
        return "rating-zero";
    }
  };

  render() {
    return (
      <div className="ui container">
        Search
        <SearchBar onSubmit={this.onFormSubmit} />
        <div>
          <BusinessList
            businesses={this.state.businesses}
            getRating={this.getRating}
            //rating={this.state.rating}
          />
        </div>
      </div>
    );
  }
}

export default App;
