import React from "react";
import PropTypes from "prop-types";
import "./Section.css";
const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};
Section.prpTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
