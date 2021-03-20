import React from 'react';
import PropTypes from 'prop-types';
import './tag.css';

const Tag = props => {
  return <div className="Tag">{props.children}</div>;
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tag;
