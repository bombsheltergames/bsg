// Framework Imports
import React, { useState } from "react";
import PropTypes from "prop-types";
// Style Imports
import "./video.css";
// Image Imports
import playBtn from "data/images/video/play-btn.svg";
// Component Imports
import Image from "Components/Image";

const Video = props => {
  const [play, setPlay] = useState(false);
  const {
    autoplay,
    showTitle,
    title,
    id,
    previewImage,
    placeholderImage,
  } = props;

  const playVideo = () => {
    setPlay(true);
  };

  const WrapperEl = showTitle ? "div" : "h2";

  return (
    <section className="Video">
      {showTitle && <h2 className="Video-title">{title}</h2>}
      {play ? (
        <WrapperEl className="Video-wrapper">
          <iframe
            title={title}
            className="Video-frame"
            src={`https://www.youtube.com/embed/${id}${
              autoplay ? "?autoplay=1" : ""
            }`}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          />
        </WrapperEl>
      ) : (
        <button className="Video-wrapper" onClick={playVideo}>
          <WrapperEl className="Video-placeholder">
            <Image
              className="Video-placeholderImg"
              src={previewImage}
              placeholder={placeholderImage}
              alt={!showTitle ? title : ""}
            />
            <img className="Video-playBtn" src={playBtn} alt="Play Video" />
          </WrapperEl>
        </button>
      )}
    </section>
  );
};

Video.propTypes = {
  autoplay: PropTypes.bool,
  showTitle: PropTypes.bool,
  title: PropTypes.string,
  previewImage: PropTypes.string.isRequired, // todo - maybe allow for this without a preview image
  placeholderImage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

Video.defaultProps = {
  autoplay: false,
  showTitle: false,
  title: "",
};

export default Video;
