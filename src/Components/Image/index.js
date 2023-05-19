// Framework Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Style Imports
import './image.css';

const IMAGE_FADE_IN_CLASS = `isLoaded`;

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoadFinishedClass: ``,
      placeholderStyle: { backgroundImage: `url(${props.placeholder})` },
    };

    this.imageLoadHandler = this.imageLoadHandler.bind(this);
  }

  imageLoadHandler = () => {
    this.setState({
      imageLoadFinishedClass: IMAGE_FADE_IN_CLASS,
    });
    this.timerHandle = setTimeout(() => {
      this.setState({
        placeholderStyle: {},
      });
    }, 1000);
  };

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { cssClasses, alt, src } = this.props;
    const { placeholderStyle, imageLoadFinishedClass } = this.state;
    return (
      <div className={`Image-wrap ${cssClasses}`} style={placeholderStyle}>
        <img
          className={`Image ${imageLoadFinishedClass}`}
          alt={alt}
          src={src}
          onLoad={this.imageLoadHandler}
        />
      </div>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  alt: PropTypes.string,
  cssClasses: PropTypes.string,
};

Image.defaultProps = {
  placeholder: '',
  alt: '',
  cssClasses: '',
};

export default Image;
