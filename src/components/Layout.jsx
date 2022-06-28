import React from "react";

import SearchBar from "./SearchBar";

const Layout = (props) => {
  return (
    <div className="w-full">
      <SearchBar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
