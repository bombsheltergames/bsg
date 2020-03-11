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
  const playVideo = () => {
    setPlay(true);
  };

  const autoplayParam = props.autoplay ? "?autoplay=1" : "";
  const WrapperEl = props.showTitle ? "div" : "h2";
  const title = props.showTitle && (
    <h2 className="Video-title">{props.title}</h2>
  );

  return (
    <section className="Video">
      {title}
      {play ? (
        <WrapperEl className="Video-wrapper">
          <iframe
            title={props.title}
            className="Video-frame"
            src={`https://www.youtube.com/embed/${props.id}${autoplayParam}`}
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
              src={props.previewImage}
              placeholder={props.placeholderImage}
              alt={!props.showTitle ? props.title : ""}
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
  previewImage: PropTypes.string,
  id: PropTypes.string,
};

export default Video;
