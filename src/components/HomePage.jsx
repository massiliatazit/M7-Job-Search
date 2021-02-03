import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { initiateGetJobs } from "../actions/jobs";
import { resetErrors } from "../actions/errors";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";
import JobDetails from "./JobDetails";

const HomePage = (props) => {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [jobId, setJobId] = useState(-1);
  const [page, setPage] = useState("home");

  useEffect(() => {
    setResults(props.jobs);
  }, [props.jobs]);

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  const loadJobs = (selection) => {
    const { dispatch } = props;
    const { description, location, full_time, page = 1 } = selection;
    dispatch(resetErrors());
    setIsLoading(true);
    dispatch(initiateGetJobs({ description, location, full_time, page }))
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  const handleSearch = (selection) => {
    loadJobs(selection);
  };

  const handleItemClick = (jobId) => {
    setJobId(jobId);
    setPage("details");
  };

  const handleResetPage = () => {
    setPage("home");
  };

  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    setJobDetails(results.find((job) => job.id === jobId));
  }, [jobId]);
  console.log(jobDetails);
  return (
    <div>
      <div className={`${page === "details" && "hide"}`}>
        <Header /> <Search onSearch={handleSearch} />
        {!_.isEmpty(errors) && (
          <div className="errorMsg">
            <p>{errors.error}</p>
          </div>
        )}
        {isLoading && <p className="loading">Loading...</p>}
        <div>
          <Results results={results} onItemClick={handleItemClick} />
        </div>
      </div>
      <div className={`${page === "home" && "hide"}`}>
        {jobId && jobDetails && (
          <JobDetails details={jobDetails} onResetPage={handleResetPage} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
  errors: state.errors,
});

export default connect(mapStateToProps)(HomePage);
