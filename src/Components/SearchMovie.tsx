import React, { useState, Fragment } from "react";
import { isTemplateExpression } from "typescript";
import { Item } from "../data";
import "./SearchMovie.css";

type SearcheMovieProps = {
  items: Item[];
};
const SearchMovie = (props: SearcheMovieProps) => {
  const { items } = props;
  const [, setFilteredMovie] = useState<Item[]>([]);
  const handleFilter = (event: { target: { value: any } }) => {
    const searchText = event.target.value;
    const filteredItem = items.filter((value) => {
      return value.title.toLowerCase().includes(searchText.toLowerCase());
    });

    if (searchText === filteredItem) {
      setFilteredMovie(filteredItem);
    }
  };
  return (
    <div className="search">
      <input type="text" placeholder="Search..." onChange={handleFilter} />
    </div>
  );
};

export default SearchMovie;
