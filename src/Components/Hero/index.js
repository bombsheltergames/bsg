// Framework Imports
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// Style Imports
import './hero.css';
// Component Imports
import Image from 'Components/Image';

const Hero = props => {
  const [opacity, setOpacity] = useState(1);

  // eslint-disable-next-line
  useEffect(() => {
    const op = (
      (window.innerHeight - window.scrollY * 1.5) / 1000 +
      0.14
    ).toFixed(2);
    if (op > -1) {
      setOpacity(op);
    }
  });

  const { fullscreen, imageSrc, placeholder, children } = props;
  return (
    <nav className={`Hero ${fullscreen ? 'Hero--fullscreen' : 'Hero--banner'}`}>
      <div
        style={{ opacity, willChange: 'opacity', transition: 'opacity 100ms' }}
      >
        {imageSrc && <Image src={imageSrc} placeholder={placeholder} />}
        {children && <div className="Hero-content">{children}</div>}
      </div>
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
