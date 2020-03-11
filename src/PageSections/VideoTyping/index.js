// Framework Imports
import React, { Component } from "react";
import InViewMonitor from "react-inview-monitor";
// Component Imports
import MainSection from "Components/MainSection";
import Video from "Components/Video";
import TypedContent from "Components/TypedContent";
// Video Preview Images
import dosVidPreview from "data/images/video/dos-previewImage.jpg";
import dosVidThumbnail from "data/images/video/dos-previewImage.thumb.png";

// Define text here
const firstIntroParagraph = "The first ship went missing.";
const secondIntroParagraph = "Now it's your turn.";
const thirdIntroParagraph =
  "When The Baroness submarine goes dark while investigating a massive vibration deep in the ocean, Abe Douglas, the commander who assembled its crew, makes it his responsibility to find out what happened.";
const fourthIntroParagraph =
  "As he plunges into the ocean, he has no idea that what he'll uncover will not only threaten the lives of his crew, but his own sanity.";

class VideoTypingSection extends Component {
  state = {
    playFirstParagraph: false,
    endFirstParagraph: false,
    endSecondParagraph: false,
    endThirdParagraph: false,
    endFourthParagraph: false,
  };

  startTyping = () => {
    this.setState({ playFirstParagraph: true });
  };
  endFirstTyping = () => {
    const timer = setTimeout(() => {
      this.setState({ endFirstParagraph: true });
    }, 500);
    return () => clearTimeout(timer);
  };
  endSecondTyping = () => {
    const timer = setTimeout(() => {
      this.setState({ endSecondParagraph: true });
    }, 1000);
    return () => clearTimeout(timer);
  };
  endThirdTyping = () => {
    const timer = setTimeout(() => {
      this.setState({ endThirdParagraph: true });
    }, 500);
    return () => clearTimeout(timer);
  };
  endTyping = () => {
    this.setState({ endFourthParagraph: true });
  };
  render() {
    const {
      playFirstParagraph,
      endFirstParagraph,
      endSecondParagraph,
      endThirdParagraph,
      endFourthParagraph,
    } = this.state;
    return (
      <MainSection id="trailer" fadeBg bottomDivider>
        <Video
          id="Z6SjXpgKkwg"
          previewImage={dosVidPreview}
          placeholderImage={dosVidThumbnail}
          title="Depths of Sanity PAX East 2020 Trailer"
          autoplay
        />
        <div className="MainSection-content u-retroFont">
          <InViewMonitor onInView={this.startTyping}>
            <p
              className={`MainSection-content-introText ${
                endFourthParagraph ? "" : "u-hidden"
              }`}
            >
              {firstIntroParagraph}
            </p>
            <p
              className={`MainSection-content-introText ${
                endFourthParagraph ? "" : "u-hidden"
              }`}
            >
              {secondIntroParagraph}
            </p>
            <p
              className={`MainSection-content-introText ${
                endFourthParagraph ? "" : "u-hidden"
              }`}
            >
              {thirdIntroParagraph}
            </p>
            <p
              className={`TypedContent ${endFourthParagraph ? "" : "u-hidden"}`}
            >
              {fourthIntroParagraph}
            </p>
          </InViewMonitor>
          {!endFourthParagraph && (
            <div
              className="MainSection-content-typingWrapper"
              aria-hidden="true"
            >
              <TypedContent
                play={playFirstParagraph}
                onDone={this.endFirstTyping}
                removeCursor
              >
                {firstIntroParagraph}
              </TypedContent>
              <TypedContent
                play={endFirstParagraph}
                onDone={this.endSecondTyping}
                removeCursor
              >
                {secondIntroParagraph}
              </TypedContent>
              <TypedContent
                play={endSecondParagraph}
                onDone={this.endThirdTyping}
                removeCursor
              >
                {thirdIntroParagraph}
              </TypedContent>
              <TypedContent play={endThirdParagraph} onDone={this.endTyping}>
                {fourthIntroParagraph}
              </TypedContent>
            </div>
          )}
          {/* <h3
          className={`MainSection-heading ${
            endFourthParagraph ? "u-fadeIn" : "u-hidden"
          }`}
        >
          Madness Comes to Us All
        </h3> */}
        </div>
      </MainSection>
    );
  }
}

export default VideoTypingSection;
