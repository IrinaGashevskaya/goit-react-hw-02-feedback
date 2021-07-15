import React from "react";
import PropTypes from "prop-types";
import "./Statistic.css";
const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className="statistic">Good: {good}</p>
      <p className="statistic">Neutral: {neutral}</p>
      <p className="statistic">Bad: {bad}</p>
      <p className="statistic">Total: {total}</p>
      <p className="statistic">Positive feedback: {positivePercentage} %</p>
    </>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
