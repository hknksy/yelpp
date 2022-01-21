import React from "react";

const BusinessItem = ({ businesses, getRating }) => {
  const message = businesses.length === 0 ? "Nothing Found..." : false;
  const businessRenderList = businesses.map((business) => {
    return (
      <div className="item eight wide column  segment" key={business.id}>
        <img
          className="ui image medium business-thumb"
          src={business.image_url}
        />
        <div className="ui content">
          <h3 className="business-header">{business.name}</h3>
          <div>
            <span
              className="iu star rating business-star-rating "
              data-rating={business.rating}
            >
              <img
                alt="img"
                className={getRating(business.rating)}
                src="https://s3-media0.fl.yelpcdn.com/assets/public/stars.yji-9bec2045845c24d3bff3ddb582884eda.png"
              />
            </span>
            <span>{business.review_count} Review</span>
          </div>
          <div>{business.categories[0].title}</div>
          <div>
            <span>
              {business.location.city} / {business.location.country}
            </span>
            <br />
            <span>{business.location.address1}</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="ui middle aligned list grid">
      {message ? message : businessRenderList}
    </div>
  );
};

export default BusinessItem;
