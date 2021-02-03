import React from "react";

const JobDetails = ({ details, onResetPage }) => {
  const {
    title,
    type,
    description,
    location,
    company,
    company_url,
    company_logo,
    how_to_apply,
  } = details;

  return (
    <div className="job-details">
      <div className="back-link">
        <a href="/#" onClick={onResetPage}>
          &lt;&lt; Back to results
        </a>
      </div>
      <div>
        {type} / {location}
      </div>
      <div className="main-section">
        <div className="left-section">
          <div className="title">{title}</div>
          <hr />
          <div className="job-description">{description}</div>
        </div>
        <div className="right-section">
          <div className="company-details">
            <h3>About company</h3>
            <img src={company_logo} alt={company} className="company-logo" />
            <div className="company-name">{company}</div>
            <a className="company-url" href={company_url}>
              {company_url}
            </a>
          </div>
          <div className="how-to-apply">
            <h3>How to apply</h3>
            <div>{how_to_apply}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
