import React, { useState } from "react";
import { Card } from "./Card";

export const Body = () => {
  // Local state variable - super powerful variable
  const [ ListOfRes,setListOfRes ]= useState([
    {
      id: "183329",
      name: "Burger King",
      avgRating: "4.6",
      cuisines: ["Burgers", "American"],
    },
    {
      id: "183325",
      name: "Dominos ",
      avgRating: "4.2",
      cuisines: ["Makhani", "Mexico"],
    },
    {
      id: "183326",
      name: "KFC",
      avgRating: "3.9",
      cuisines: ["Makhani", "Mexico"],
    },
  ]);
  // let ListOfRes = [ {
  //       id: "183329",
  //       name: "Burger King",
  //       avgRating: "4.6",
  //       cuisines: ["Burgers", "American"],
  //     },
  //     {
  //       id: "183325",
  //       name: "Dominos ",
  //       avgRating: "4.2",
  //       cuisines: ["Makhani", "Mexico"],
  //     },
  //     {
  //       id: "183326",
  //       name: "KFC",
  //       avgRating: "3.9",
  //       cuisines: ["Makhani", "Mexico"],
  //     }]

  console.log(ListOfRes)

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = ListOfRes.filter((e) => e.avgRating < 4);
            console.log("filter list below 4", filterList);
            setListOfRes(filterList);
          }}
        >
          top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {ListOfRes.map((res) => (
          <Card key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
