// Framework Imports
import React from "react";
import PropTypes from "prop-types";
// Style Imports
import "./imageGallery.css";
// Component Imports
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = props => {
  const {
    images,
    maxItemWidth,
    showModal,
    showTitleThumb,
    showTitleModal,
  } = props;
  return (
    <div className="ImageGallery">
      {images.map((image, index) => (
        <ImageGalleryItem
          key={index}
          image={image}
          maxItemWidth={maxItemWidth}
          showModal={showModal}
          showTitleThumb={showTitleThumb}
          showTitleModal={showTitleModal}
        />
      ))}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  maxItemWidth: PropTypes.string,
  showModal: PropTypes.bool,
  showTitleThumb: PropTypes.bool,
  showTitleModal: PropTypes.bool,
};
ImageGallery.defaultProps = {
  maxItemWidth: null,
  showModal: false,
  showTitleThumb: false,
  showTitleModal: false,
};

export default ImageGallery;
