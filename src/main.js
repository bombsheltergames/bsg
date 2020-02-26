// Framework Imports
import React, { Component, Fragment } from "react";
import throttle from "lodash/throttle";
import InViewMonitor from "react-inview-monitor";
//import Typing from "react-typing-animation";
//import LazyLoad from "react-lazyload";
// Component Styles
import "styles/main.css";
// Component Imports
import Header from "layout/header";
import Hero from "components/hero";
import Image from "components/image";
import MainSection from "components/mainSection";
import Button from "components/button";
import Video from "components/video";
import TypedContent from "components/typedContent";
import ImageGallery from "components/imageGallery";
// import ContentPanel from "components/contentPanel"; - not currently in use, for the More Games section
import ContactForm from "components/contactForm";
import ContactInfo from "components/contactInfo";
import Footer from "layout/footer";
import BackToTop from "layout/backToTop";
// External Data
import screenshotGallery from "data/screenshotGallery";
import footerImages from "data/footerImages";
// import moreGames from "data/moreGames"; - not currently in use, for the More Games section
// Hero Banner Images
import dosHero from "images/hero/dos-hero.png";
import dosHeroThumbnail from "images/hero/dos-hero.thumb.png";
import dosLogoThumbnail from "images/logo/dos-tentacles-sm.png";
import dosLogo from "images/logo/dos-tentacles.png";
import sonarIcon from "images/icons/sonar.gif";
import pickupsIcon from "images/icons/pickups.png";
import abeIcon from "images/icons/abe-sm.png";
import shipIcon from "images/icons/ship.png";
// Video Preview Images
import dosVidPreview from "images/video/dos-previewImage.jpg";
import dosVidThumbnail from "images/video/dos-previewImage.thumb.png";

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
      endFourthParagraph: false
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

  firstIntroParagraph = "The first ship went missing.";
  secondIntroParagraph = "Now it's your turn.";
  thirdIntroParagraph =
    "When The Baroness submarine goes dark while investigating a massive vibration deep in the ocean, Abe Douglas, the commander who assembled its crew, makes it his responsibility to find out what happened.";
  fourthIntroParagraph =
    "As he plunges into the ocean, he has no idea that what he'll uncover will not only threaten the lives of his crew, but his own sanity.";
  startFirstTyping = () => {
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
  endFourthTyping = () => {
    this.setState({ endFourthParagraph: true });
  };

  // And here's the actual content
  render() {
    return (
      <Fragment>
        <div className="Main">
          <Hero imageSrc={dosHero} placeholder={dosHeroThumbnail} fullscreen>
            <h1 className="u-accessibleText">Depths of Sanity</h1>
            <Image
              src={dosLogo}
              placeholder={dosLogoThumbnail}
              alt="Depths of Sanity"
            />
            <Button type="ghost" size="large" href="#trailer">
              Watch Trailer
            </Button>
            <Button
              type="ghost"
              size="large"
              rel="noopener noreferrer"
              download
              href="https://bombsheltergamescom.ipage.com/DoS_Demo.zip"
            >
              Download Demo
            </Button>
            <Button
              type="ghost"
              size="large"
              target="_blank"
              rel="noopener noreferrer"
              href="https://store.steampowered.com/app/848080/Depths_of_Sanity/"
            >
              Steam Page
            </Button>
          </Hero>
          <main className="Main-content">
            <Header />
            <MainSection id="trailer" fadeBg bottomDivider>
              <Video
                id="Z6SjXpgKkwg"
                previewImage={dosVidPreview}
                placeholderImage={dosVidThumbnail}
                title="Depths of Sanity PAX East 2020 Trailer"
                autoplay
              />
              <div className="MainSection-content u-retroFont">
                <InViewMonitor onInView={this.startFirstTyping}>
                  <p
                    className={`MainSection-content-introText ${
                      this.state.endFourthParagraph ? "" : "u-hidden"
                    }`}
                  >
                    {this.firstIntroParagraph}
                  </p>
                  <p
                    className={`MainSection-content-introText ${
                      this.state.endFourthParagraph ? "" : "u-hidden"
                    }`}
                  >
                    {this.secondIntroParagraph}
                  </p>
                  <p
                    className={`MainSection-content-introText ${
                      this.state.endFourthParagraph ? "" : "u-hidden"
                    }`}
                  >
                    {this.thirdIntroParagraph}
                  </p>
                  <p
                    className={`TypedContent ${
                      this.state.endFourthParagraph ? "" : "u-hidden"
                    }`}
                  >
                    {this.fourthIntroParagraph}
                  </p>
                </InViewMonitor>
                {!this.state.endFourthParagraph && (
                  <div
                    className="MainSection-content-typingWrapper"
                    aria-hidden="true"
                  >
                    <TypedContent
                      play={this.state.playFirstParagraph}
                      onDone={this.endFirstTyping}
                      removeCursor
                    >
                      {this.firstIntroParagraph}
                    </TypedContent>
                    <TypedContent
                      play={this.state.endFirstParagraph}
                      onDone={this.endSecondTyping}
                      removeCursor
                    >
                      {this.secondIntroParagraph}
                    </TypedContent>
                    <TypedContent
                      play={this.state.endSecondParagraph}
                      onDone={this.endThirdTyping}
                      removeCursor
                    >
                      {this.thirdIntroParagraph}
                    </TypedContent>
                    <TypedContent
                      play={this.state.endThirdParagraph}
                      onDone={this.endFourthTyping}
                    >
                      {this.fourthIntroParagraph}
                    </TypedContent>
                  </div>
                )}
                {/* <h3
                  className={`MainSection-heading ${
                    this.state.endFourthParagraph ? "u-fadeIn" : "u-hidden"
                  }`}
                >
                  Madness Comes to Us All
                </h3> */}
              </div>
            </MainSection>
            <MainSection>
              <div className="MainSection-content">
                <ul className="MainSection-features">
                  <li>
                    <img src={abeIcon} alt="" />
                    <h4 className="u-retroFont">Deep, Involving Storyline</h4>
                    <p>
                      Discover the fate of each grew member of{" "}
                      <em>The Baroness</em> and uncover the mystery of the
                      signal coming from the ocean floor.
                    </p>
                  </li>
                  <li>
                    <img src={sonarIcon} alt="" />
                    <h4 className="u-retroFont">
                      Massive Interconnected World
                    </h4>
                    <p>
                      Explore beautiful coral reefs, sunken wrecks, underground
                      magma lairs and much more in your journey to the darkest
                      depths of the ocean.
                    </p>
                  </li>
                  <li>
                    <img src={pickupsIcon} alt="" />
                    <h4 className="u-retroFont">Search, Scavenge, Survive</h4>
                    <p>
                      Discover advanced weaponry to help you tackle new threats,
                      and attachments that unlock new traversal options,
                      including rock drills, tow lines, sonar, and more.
                    </p>
                  </li>
                  <li>
                    <img src={shipIcon} alt="" />
                    <h4 className="u-retroFont">Danger from Every Angle</h4>
                    <p>
                      With 360 degrees of movement, you're never safe in this
                      adventure. Battle monstrous bosses, survive tense
                      set-pieces, and uncover secrets that expand the story with
                      your arsenal.
                    </p>
                  </li>
                </ul>
              </div>
            </MainSection>
            <MainSection alt topDivider bottomDivider>
              <h2 className="u-accessibleText">Screenshot Gallery</h2>
              <ImageGallery images={screenshotGallery} showModal />
            </MainSection>
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
            <ContactForm />
            <ContactInfo />
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
