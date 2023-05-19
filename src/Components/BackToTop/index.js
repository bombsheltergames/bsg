// Framework Imports
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Style Imports
import './backToTop.css';
// Image Imports
import diver from 'data/images/layout/diver-swim.gif';

const SCROLL_STEP = 50; // px
const DELAY = 2; // ms

const BackToTop = props => {
  const [intervalId, setIntervalId] = useState(0);
  const [show, setShow] = useState(false);
  const [fadeClass, setFadeClass] = useState('');
  const { visible } = props;

  useEffect(() => {
    if (!visible) {
      // Call outro animation when mounted prop is false
      updateStyle(false);
    } else {
      setShow(true);
      updateStyle(true);
    }
  }, [visible]);

  useEffect(() => {
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
  });

  const updateStyle = shouldShow => {
    // Add styles for mount/unmount animation
    const newFadeClass = shouldShow ? 'fadeIn' : 'fadeOut';
    setFadeClass(newFadeClass);
  };

  const scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - SCROLL_STEP);
  };

  const scrollToTop = () => {
    let newIntervalId = setInterval(scrollStep.bind(this), DELAY);
    setIntervalId(newIntervalId);
  };

  return (
    show && (
      <nav className="BackToTop-wrap">
        <button className={`BackToTop ${fadeClass}`} onClick={scrollToTop}>
          &#8963;
          <span className="u-accessibleText">Back To Top</span>
          <img src={diver} className="BackToTop-image" alt="" />
        </button>
      </nav>
    )
  );
};

BackToTop.propTypes = {
  visible: PropTypes.bool,
};

BackToTop.defaultProps = {
  visible: false,
};

export default BackToTop;
