import React from "react";
import NewsDrawer from "../../../../components/newsDrawer/NewsDrawer";
import HomeNews from "../../../../components/newsDrawer/utils/components/HomeNews";

const FreeUserFeed = () => {
  const categories = [
    { name: "início", content: <HomeNews /> },
    { name: "g1", content: null },
    { name: "ge", content: null },
    { name: "gshow", content: null },
    { name: "globoplay", content: null },
  ];
  return <NewsDrawer newsCategories={categories} />;
};

export default FreeUserFeed;
