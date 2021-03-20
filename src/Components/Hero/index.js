// Framework Imports
import React from 'react';
import PropTypes from 'prop-types';
// Style Imports
import './hero.css';
// Component Imports
import Image from 'Components/Image';

const Hero = props => {
  const { fullscreen, imageSrc, placeholder, children } = props;
  return (
    <nav className={`Hero ${fullscreen ? 'Hero--fullscreen' : 'Hero--banner'}`}>
      {imageSrc && <Image src={imageSrc} placeholder={placeholder} />}
      {children && <div className="Hero-content">{children}</div>}
    </nav>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  fullscreen: PropTypes.bool,
  imageSrc: PropTypes.string,
  placeholder: PropTypes.string,
};

Hero.defaultProps = {
  children: undefined,
  fullscreen: false,
  imageSrc: null,
  placeholder: null,
};

export default Hero;
