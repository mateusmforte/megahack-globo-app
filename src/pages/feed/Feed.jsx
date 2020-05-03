import React, { Component } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import UserAvatar from "../../components/userAvatar/UserAvatar";

import "./Feed.scss";
import Categories from "../../components/categories/Categories";

class Feed extends Component {
  render() {
    return (
      <div className="feed">
        <header className="feed__header">
          <SearchBar />
          <UserAvatar userLogged={true} />
        </header>
        <main>
          <Categories />
        </main>
      </div>
    );
  }
}

export default Feed;
