import React from "react";
import SearchBar from "./SearchBar";

const Layout = (props) => {
  const { searchText, setSearchText, setStartFetch } = props;
  return (
    <div className="w-full">
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        setStartFetch={setStartFetch}
      />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
