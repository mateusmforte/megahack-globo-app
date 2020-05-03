import React, { Component } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import UserAvatar from "../../components/userAvatar/UserAvatar";

import "./Feed.scss";
import Categories from "../../components/categories/Categories";
import NewsDrawer from "../../components/newsDrawer/NewsDrawer";
import HomeNews from "../../components/newsDrawer/utils/components/HomeNews";

class Feed extends Component {
  constructor(props) {
    super();
    this.state = {
      loggedUser: false,
    };
  }

  render() {
    const categories = [
      { name: "início", content: <HomeNews /> },
      { name: "g1", content: null },
      { name: "ge", content: null },
      { name: "gshow", content: null },
      { name: "globoplay", content: null },
    ];
    return (
      <div className="feed">
        <header className="feed__header">
          <SearchBar />
          <UserAvatar userLogged={true} />
        </header>
        <main>
          <Categories />
          {this.state.loggedUser ? (
            <div></div>
          ) : (
            <NewsDrawer newsCategories={categories} />
          )}
        </main>
      </div>
    );
  }
}

export default Feed;
