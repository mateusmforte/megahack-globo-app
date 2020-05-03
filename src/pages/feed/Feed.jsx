import React, { Component } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import UserAvatar from "../../components/userAvatar/UserAvatar";

import "./Feed.scss";

class Feed extends Component {
  render() {
    return (
      <div className="feed">
        <header className="feed__header">
          <SearchBar />
          <UserAvatar userLogged={true} />
        </header>
        <main></main>
      </div>
    );
  }
}

export default Feed;
