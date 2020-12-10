import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => (
  <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
      <img
        src={`https://robohash.org/${props.contact.name}.png`}
        className="card-img-top"
        alt="Jane Doe"
        width="100"
      />
      <div className="card-body">
        <h5 className="card-title">{props.contact.name}</h5>
        <p className="card-text">{props.contact.email}</p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <Link to={`contacts/${props.contact.id}`}  className="btn btn-primary float-right">
              View Details
            </Link>
          </div>
          <small className="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>
);

export default Card;