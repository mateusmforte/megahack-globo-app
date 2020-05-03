import React, { Component } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import UserAvatar from "../../components/userAvatar/UserAvatar";

import "./Feed.scss";
import Categories from "../../components/categories/Categories";
import UserFeed from "./utils/UserFeed/UserFeed";
import FreeUserFeed from "./utils/FreeUserFeed/FreeUserFeed";

class Feed extends Component {
  constructor(props) {
    super();
    this.state = {
      loggedUser: true,
    };
  }

  render() {
    return (
      <div className="feed">
        <header className="feed__header">
          <SearchBar />
          <UserAvatar userLogged={this.state.loggedUser} />
        </header>
        <main>
          <Categories />
          {this.state.loggedUser ? <UserFeed /> : <FreeUserFeed />}
        </main>
      </div>
    );
  }
}

export default Feed;
