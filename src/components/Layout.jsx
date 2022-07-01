import React from "react";

import SearchBar from "./SearchBar";

const Layout = (props) => {
  return (
    <div className="w-full xl:w-[90%] mx-auto bg-slate-200">
      <SearchBar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
