// Framework Imports
import React, { Component, Fragment } from "react";
import throttle from "lodash/throttle";
// Component Styles
import "styles/main.css";
// Component Imports
import Header from "Layout/Header";
import HeroBanner from "PageSections/HeroBanner";
import VideoTyping from "PageSections/VideoTyping";
import Features from "PageSections/Features";
import ScreenShotGallery from "PageSections/ScreenShotGallery";
import ContactUs from "PageSections/ContactUs";
import Footer from "Layout/Footer";
import BackToTop from "Components/BackToTop";
// Image Imports
import footerImages from "data/footerImages";

class Main extends Component {
  // Most of this is a bunch of garbage so we can control when we're showing the Back to Top button
  // We're checking the height of the window, and the offset of the MainContent container
  constructor(props) {
    super(props);
    // Storing these values in state so we can save and update them as necessary
    // When the top of the container is halfway up the screen, we're going to show the Back to Top button
    // We can add `width: window.innerWidth` if we want both at some point, but we only need height right now
    this.state = {
      showBackToTop: false,
      width: window.innerWidth,
      height: window.innerHeight,
      playFirstParagraph: false,
      endFirstParagraph: false,
      endSecondParagraph: false,
      endThirdParagraph: false,
      endFourthParagraph: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  // Adding the resize event so we can adjust the dimensions if necessary
  componentDidMount = () => {
    window.addEventListener("resize", this.updateWindowDimensions);
    // Add listener for scroll, to trigger show/hide of the back to top button
    window.addEventListener("scroll", this.handleScroll);
  };
  // Remove when the component unmounts (when we change pages)
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowDimensions);
  };
  // Function that actually updates the height
  // Like with state, we can add `width: window.innerWidth` if we want that too
  updateWindowDimensions = () => {
    this.setState({ height: window.innerHeight });
  };
  // This is where we make the comparison and update state if we actually want to show the Back to Top button
  // Throttling so we're not calling it on every single scroll event, and firing 1000s of calls to this function
  handleScroll = throttle(() => {
    const shouldShow = window.scrollY > this.state.height / 2;
    if (this.state.showBackToTop !== shouldShow) {
      this.setState({ showBackToTop: shouldShow });
    }
  }, 200);

  // And here's the actual content
  render() {
    return (
      <Fragment>
        <div className="Main">
          <HeroBanner />
          <main className="Main-content">
            <Header />
            <VideoTyping />
            <Features />
            <ScreenShotGallery />
            {/*
            Hiding the info about other games for now
            <MainSection>
              <h2 className="MainSection-heading">More Games</h2>
              {moreGames.map((game, index) => (
                <ContentPanel image={game.logo} imageAlt={game.title}>
                  <p>{game.description}</p>
                </ContentPanel>

              ))}
            </MainSection>
            */}
            <ContactUs />
            <Footer images={footerImages} />
          </main>
        </div>
        <BackToTop
          visible={this.state.showBackToTop}
          target={document.querySelector(".Main")}
        />
      </Fragment>
    );
  }
}

export default Main;
