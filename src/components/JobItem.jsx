import React, { useState, useEffect } from "react";
import moment from "moment";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import { connect } from "react-redux";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (job) =>
    dispatch({ type: "ADD_TO_FAVOURITES", payload: job }),
  removeFromFavourites: (job) =>
    dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: job }),
});

const JobItem = (props) => {
  const {
    id,
    type,
    created_at,
    company,
    location,
    title,
    company_logo,
    index,
    onItemClick,
  } = props;
  const [isFavourited, setIsFavourited] = useState(false);

  useEffect(() => {
    if (
      props.favourites.filter((favourite) => favourite.id === props.id)
        .length === 1
    ) {
      setIsFavourited(true);
    } else {
      setIsFavourited(false);
    }
  }, []);

  useEffect(() => {
    if (
      props.favourites.filter((favourite) => favourite.id === props.id)
        .length === 1
    ) {
      setIsFavourited(true);
    } else {
      setIsFavourited(false);
    }
  }, [props.favourites]);
  return (
    <div className="job-item" index={index + 1} onClick={() => onItemClick(id)}>
      <div className="company-logo">
        <img src={company_logo} alt={company} width="100" height="100" />
      </div>
      <div className="job-info">
        <div className="job-title">{title}</div>
        <div>
          {isFavourited ? (
            <StarIcon
              onClick={
                isFavourited
                  ? () => props.removeFromFavourites(props.data)
                  : () => props.addToFavourites(props.data)
              }
            />
          ) : (
            <StarBorderIcon
              onClick={
                isFavourited
                  ? () => props.removeFromFavourites(props.data)
                  : () => props.addToFavourites(props.data)
              }
            />
          )}
        </div>

        <div className="job-location">
          {location} | {type}
        </div>
        <div className="company-name">{company}</div>
      </div>
      <div className="post-info">
        <div className="post-time">
          Posted {moment(new Date(created_at)).fromNow()}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobItem);
