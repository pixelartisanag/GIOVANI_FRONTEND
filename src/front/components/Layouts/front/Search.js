import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 m-auto col-md-8 col-sm-11">
              <div className="search-width  text-center">
                <button type="button" className="close">
                  <i className="fas fa-times" />
                </button>
                <form className="search-form" action="login.html#">
                  <input
                    type="search"
                    defaultValue
                    placeholder="What are you looking for?"
                  />
                  <button type="submit" className="search-btn">
                    search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
