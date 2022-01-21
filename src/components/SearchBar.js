import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
    searchLocation: "",
  };

  onInputChange = (e, term) => {
    e.preventDefault();
    if (term !== "") {
      return term === "business"
        ? this.setState({ searchTerm: e.target.value })
        : this.setState({ searchLocation: e.target.value });
    }
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const termInput = document.querySelector("#search-term");
    const locationInput = document.querySelector("#location-term");

    if (locationInput.value === "") {
      locationInput.placeholder = "this field required";
      locationInput.focus();
    }

    if (termInput.value === "") {
      termInput.placeholder = "this field required";
      termInput.focus();
    }

    if (termInput.value !== "" && locationInput.value !== "") {
      this.props.onSubmit(this.state.searchTerm, this.state.searchLocation);
    }
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="two fields">
            <div className="field">
              <h3>Search Terms</h3>
              <p>
                Search term, for example "food", "restaurants" or "Starbucks"
                etc.
              </p>
              <input
                className="ui action input"
                id="search-term"
                type="text"
                value={this.state.searchTerm}
                onChange={(e) => {
                  this.onInputChange(e, "business");
                }}
              />
            </div>
            <div className="field">
              <h3>Location</h3>
              <p>
                Examples: "New York City", "NYC", "350 5th Ave, New York, NY
                10118"
              </p>
              <input
                className="ui action input"
                id="location-term"
                type="text"
                value={this.state.searchLocation}
                onChange={(e) => this.onInputChange(e, "location")}
              />
            </div>
          </div>
          <button
            className="ui button primary"
            onClick={(e) => this.onFormSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
