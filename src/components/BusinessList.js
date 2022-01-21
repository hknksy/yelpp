import "../css/app.css";
import React, { useState } from "react";
import BusinessItem from "./BusinessItem";

const BusinessList = ({ businesses, getRating }) => {
  return (
    <div className="ui container">
      <BusinessItem businesses={businesses} getRating={getRating} />
    </div>
  );
};

export default BusinessList;
