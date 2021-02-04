import React from "react";
import { Row, Col, Button } from "react-bootstrap";

import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setSelectedJob: (job) => dispatch({ type: "SET_JOBS", payload: job }),
  addToFavourites: (job) =>
    dispatch({ type: "ADD_TO_FAVOURITES", payload: job }),
  removeFromFavourites: (job) =>
    dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: job }),
});

function Favourites(props) {
  const moreDetailsHandler = (id, data) => {
    props.setSelectedJob(data);
    //history.push(``)
  };
  console.log({ props });
  return (
    <div id="job-detail-main">
      <h1>Your Favourites</h1>
      <Row>
        {props.favourites.map((favourite) => (
          <Col xs={6}>
            <div className="search-result mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="font-weight-bold mb-0">{favourite.title}</h2>
                <i className="fas fa-star pl-4 rotate-in-2-cw"></i>
              </div>
              <p className="font-weight-bold mb-3">{favourite.location}</p>
              <div className="d-flex">
                <img
                  src={favourite.company_logo}
                  className="mr-3"
                  alt="company-logo"
                />
                <div>
                  <h5 className="font-weight-bold mb-0">{favourite.company}</h5>
                  <a href={favourite.company_url} target="_blank">
                    {favourite.company_url}
                  </a>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-end mt-4">
                <p className="job-type mb-0">{favourite.type}</p>
                <Button
                  variant="dark"
                  className="px-4 mb-0"
                  style={{ fontSize: 14 }}
                  onClick={() => moreDetailsHandler(favourite.id, favourite)}
                >
                  More details...
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
