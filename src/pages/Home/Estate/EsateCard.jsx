import React from 'react';
import { Link } from 'react-router-dom';

const EsateCard = ({ estate }) => {
  const { id, estate_title, segment_name, description, price, status, area, location, facilities, image } = estate;

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={estate_title} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{estate_title}</h2>
          <p className="text-base text-gray-600">{segment_name}</p>
          <p className="text-base text-gray-600">
            <span className="text-xl font-semibold">Price:</span> ${price}
          </p>
          <p className="text-base text-gray-600">
            <span className="text-xl font-semibold">Status:</span> {status}
          </p>
          <p className="text-base text-gray-600">
            <span className="text-xl font-semibold">Area:</span> {area}
          </p>
          <p className="text-base text-gray-600">
            <span className="text-xl font-semibold">Location:</span> {location}
          </p>
          <p className="text-base text-gray-600">
            <span className="text-xl font-semibold">Facilities:</span> {facilities.join(', ')}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/card-details/${id}`}>
              <button className="btn btn-primary">View Property</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EsateCard;
