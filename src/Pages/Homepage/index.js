// Framework Imports
import React, { Component } from 'react';
import throttle from 'lodash/throttle';
// Style Imports
import './homepage.css';
// Page Layout & Section Imports
import Header from 'Layout/Header';
import HeroBanner from 'PageSections/HeroBanner';
import VideoTyping from 'PageSections/VideoTyping';
import Features from 'PageSections/Features';
import ScreenShotGallery from 'PageSections/ScreenShotGallery';
import MainSection from 'Layout/MainSection';
import MainContent from 'Layout/MainContent';
import MediumBlog from 'PageSections/MediumBlog';
import Footer from 'Layout/Footer';
import BackToTop from 'Components/BackToTop';
// Image Data
import screenshots from 'data/screenshots/homepage';

class Homepage extends Component {
  state = {
    showBackToTop: false,
    spinLogo: false,
  };
  componentDidMount() {
    // Add listener for scroll, to trigger show/hide of the back to top button
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  // This is where we make the comparison and update state if we actually want to show the Back to Top button
  // Throttling so we're not calling it on every single scroll event, and firing 1000s of calls to this function
  handleScroll = throttle(() => {
    const shouldShow = window.scrollY > window.innerHeight;
    if (this.state.showBackToTop !== shouldShow) {
      this.setState({ showBackToTop: shouldShow, spinLogo: false });
    }
    if (window.scrollY > 0 && !shouldShow) {
      this.setState({ spinLogo: true });
    } else if (window.scrollY === 0) {
      this.setState({ spinLogo: false });
    }
  }, 200);

  // And here's the actual content
  render() {
    const { showBackToTop, spinLogo } = this.state;
    return (
      <>
        <div className="Main">
          <HeroBanner />
          <main className="Main-content">
            <Header spinLogo={spinLogo} />
            <VideoTyping />
            <Features />
            <ScreenShotGallery screenshots={screenshots} />
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
            <MainSection>
              <MainContent>
                <MediumBlog clipPosts showTags />
              </MainContent>
            </MainSection>
            <Footer showContactForm showContactInfo />
          </main>
        </div>
        <BackToTop
          visible={showBackToTop}
          target={document.querySelector('.Main')}
        />
      </>
    );
  }
}

export default Homepage;
