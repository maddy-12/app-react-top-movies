import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import { Data, Item } from "../data";
import "../App.css";
import { Rating } from "react-simple-star-rating";

const Stars = () => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
    console.log(rate);
  };

  return (
    <Rating
      // fillColor="#BADA55"
      allowHalfIcon
      transition
      size={20}
      // showTooltip
      onClick={handleRating}
      ratingValue={rating} /* Available Props */
    />
  );
};

// API calls
type MoviesProps = {
  items: Item[];
};
const Movies = (props: MoviesProps) => {
  const { items } = props;
  const formatedItems = items.map(({ fullTitle, crew, imDbRating, image }) => ({
    fullTitle,
    crew,
    imDbRating,
    image,
  }));

  return (
    <Fragment>
      {formatedItems.map((item) => (
        <div className="card" key={item.fullTitle}>
          <img className="card-img" src={item.image} alt="" />
          <h2> {item.fullTitle} </h2>
          <div className="stars">
            <Stars />
            <div className="stars">
              <p> {item.imDbRating}</p>
            </div>
          </div>
          <p> {item.crew} </p>
        </div>
      ))}
    </Fragment>
  );
};
export default Movies;
