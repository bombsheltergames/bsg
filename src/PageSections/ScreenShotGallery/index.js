// Framework Imports
import React from "react";
// Component Imports
import MainSection from "Components/MainSection";
import ImageGallery from "Components/ImageGallery";
// External Data
import screenshots from "data/screenshots";

const ScreenShotGallery = () => (
  <MainSection alt topDivider bottomDivider expanded>
    <h2 className="u-accessibleText">Screenshot Gallery</h2>
    <ImageGallery images={screenshots} showModal />
  </MainSection>
);

export default ScreenShotGallery;
