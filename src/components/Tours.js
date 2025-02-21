import React, { useState } from 'react'

const Tours = ({ tour, removeTour }) => {
    const [showMore, setShowMore] = useState(false);
    const { image } = tour;
    return (
      <div className="tour-card">
        <img src={image} alt={tour.name} />
        <h2>{tour.name}</h2>
        <p className="price">{tour.price}</p>
        <p>
          {showMore
            ? tour.info
            : ``}
          <button onClick={() => setShowMore(!showMore)} className="toggle-btn">
            {showMore ? "See Less" : "Show More"}
          </button>
        </p>
        <button onClick={() => removeTour(tour.id)} className="remove-btn">
          Remove
        </button>
      </div>
    );
  };

export default Tours

