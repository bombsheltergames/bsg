// Framework Imports
import React from "react";
import PropTypes from "prop-types";
// Component Imports
import MainSection from "Layout/MainSection";
import ImageGallery from "Components/ImageGallery";

const ScreenShotGallery = props => {
  const { screenshots } = props;
  return (
    <MainSection alt topDivider bottomDivider expanded>
      <h2 className="u-accessibleText">Screenshot Gallery</h2>
      <ImageGallery images={screenshots} showModal />
    </MainSection>
  );
};

ScreenShotGallery.propTypes = {
  screenshots: PropTypes.array.isRequired,
};

export default ScreenShotGallery;
