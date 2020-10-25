// Framework Imports
import React from "react";
// Style Imports
import "./pressKit.css";
// Component Imports
import Header from "Layout/Header";
import Footer from "Layout/Footer";
import Video from "Components/Video";
import ImageGallery from "Components/ImageGallery";
import MainSection from "Layout/MainSection";
// Image Imports
import dosLogo from "data/images/logo/dos-angler-logo.png";
import dosVidPreview from "data/images/video/dos-previewImage.jpg";
import dosVidThumbnail from "data/images/video/dos-previewImage.thumb.png";
import bfig from "data/images/awards/bfig-2018.png";
import gameDaily from "data/images/awards/game-daily-2019.png";
import dreamhack from "data/images/awards/dreamhack-2019.png";
import pax2019 from "data/images/awards/pax-rising-2019.png";
// Image Data
import pressKitScreenshots from "data/screenshots/presskit";
import pressKitLogos from "data/pressKitLogos";

const PressKit = () => {
  return (
    <div className="PressKit">
      <Header />
      <div className="PressKit-wrapper">
        <nav className="PressKit-sidebar">
          <h1>Press Kit</h1>
          <a href="/presskit/#factsheet">Factsheet</a>
          <a href="/presskit/#description">Description</a>
          <a href="/presskit/#videos">Videos</a>
          <a href="/presskit/#images">Images</a>
          <a href="/presskit/#logo">Logo &amp; Icon</a>
          <a href="/presskit/#awards">Awards &amp; Accolades</a>
          <a href="/presskit/#links">Links</a>
          <a href="/presskit/#credits">Credits</a>
          <a href="/presskit/#bsg-llc">Bomb Shelter Games LLC</a>
          <a href="/presskit/#website">Company Website</a>
          <a href="/presskit/#contact">Contact</a>
        </nav>
      </div>
      <div className="PressKit-wrapper u-clearFix">
        <div className="PressKit-section">
          <div className="PressKit-hero">
            <img src={dosLogo} alt="Depths of Sanity" />
          </div>
          <section className="PressKit-section-description">
            <aside>
              <h2>
                <span id="factsheet">Factsheet</span>
              </h2>
              <dl>
                <dt>Developer:</dt>
                <dd>BOMB SHELTER GAMES</dd>
                <dt>Release Date:</dt>
                <dd>
                  <p className="noMargin">Steam Early Access</p>
                  <p>Oct 30, 2020</p>
                  <p className="noMargin">PC/Switch/Xbox/PS4</p>
                  <p>2021</p>
                </dd>
                <dt>Website:</dt>
                <dd>Bombsheltergames.com</dd>
                <dt>Founding:</dt>
                <dd>October 2009</dd>
              </dl>
            </aside>
            <div>
              <h2>
                <span id="description">Description</span>
              </h2>
              <p>Depths of Sanity is an underwater metroidvania nightmare.</p>
              <p>
                When The Baroness submarine goes dark while investigating a
                massive vibration deep in the ocean, Abe Douglas, the commander
                who assembled the crew, makes it his responsibility to find out
                what happened.
              </p>
              <p>
                As he plunges into the ocean, he has no idea that what he’ll
                uncover will not only threaten the lives of his crew, but his
                own sanity.
              </p>
            </div>
          </section>
        </div>
      </div>

      <MainSection alt topDivider bottomDivider>
        <div className="PressKit-wrapper">
          <div className="PressKit-section">
            <h2>
              <span id="features">Features</span>
            </h2>
            <ul>
              <li>
                <h4>Danger from Every Angle:</h4>
                <p>
                  With full 360-degree movement, there are no double jumpsor
                  wall runs to help you under the ocean. Use a wide rangeof
                  unique tools to uncover your environment, including tow lines
                  that help you pull through heavy currents, and a sonarsystem
                  that helps you navigate through pitch black darkness.
                </p>
              </li>
              <li>
                <h4>Massive Interconnected World:</h4>
                <p>
                  Explore beautiful coral reefs, sunken wrecks, underground
                  magma lairs and much more in your journey to the darkest
                  depths of the ocean.
                </p>
              </li>

              <li>
                <h4>Deep, Involving Storyline:</h4>
                <p>
                  Discover the fate of each crew member of The Baronessand
                  uncover the mystery of the signal coming from the ocean floor.
                </p>
              </li>
              <li>
                <h4>Search, Scavenge, Stay Alive:</h4>
                <p>
                  Unlock a wide variety of weapons to help you battle monstrous
                  bosses, survive tense set-pieces, and uncover secrets that
                  expand the story and your chances of survival.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </MainSection>
      <MainSection>
        <div className="PressKit-wrapper">
          <div className="PressKit-section">
            <h2>
              <span id="videos">Videos</span>
            </h2>
            <h4>Early Access Launch Trailer</h4>
            <Video
              id="mTAg5vLwPsU"
              previewImage={dosVidPreview}
              placeholderImage={dosVidThumbnail}
              title="Depths of Sanity - Early Access Launch Trailer"
              autoplay
            />
          </div>
        </div>
      </MainSection>
      <MainSection alt topDivider bottomDivider>
        <div className="PressKit-wrapper">
          <div className="PressKit-section">
            <h2>
              <span id="images">Images</span>
            </h2>
            <ImageGallery
              images={pressKitScreenshots}
              maxItemWidth="45%"
              showModal
            />
          </div>
        </div>
      </MainSection>
      <MainSection>
        <div className="PressKit-wrapper">
          <div className="PressKit-section">
            <h2>
              <span id="logo">Logo &amp; Icon</span>
            </h2>
            <ImageGallery images={pressKitLogos} maxItemWidth="45%" showModal />
          </div>
        </div>
      </MainSection>
      <MainSection alt topDivider bottomDivider>
        <div className="PressKit-wrapper">
          <div className="PressKit-section">
            <h2>
              <span id="awards">Awards &amp; Accolades</span>
            </h2>
            <p className="PressKit-awards">
              <img src={bfig} className="PressKit-awards-bfig" alt="" />
              <img
                src={dreamhack}
                className="PressKit-awards-dreamhack"
                alt=""
              />
              <img src={pax2019} className="PressKit-awards-pax" alt="" />
              <img
                src={gameDaily}
                className="PressKit-awards-gameDaily"
                alt=""
              />
            </p>
            <p>
              &ldquo;Most Compelling Game Mechanics&rdquo; - Boston Festival of
              Indie Games (2018)
            </p>
            <p>&ldquo;Best Adventure Game&rdquo; - Dreamhack Dallas (2019)</p>
            <p>
              &ldquo;PAX Rising Official Selection&rdquo; - PAX East (2019,
              2018)
            </p>
            <p>
              &ldquo;Best Game Audio&rdquo; Nominee - GameDaily Connect London
              (2019)
            </p>
          </div>
        </div>
      </MainSection>
      <MainSection>
        <div className="PressKit-wrapper">
          <div className="PressKit-section">
            <h2>
              <span id="links">Links</span>
            </h2>
            <p>
              Website:{" "}
              <a href="https://depthsofsanity.com">
                https://depthsofsanity.com
              </a>
            </p>
            <p>
              Trailer:{" "}
              <a href="https://www.youtube.com/watch?v=BmAGlLSxHDE">
                https://www.youtube.com/watch?v=BmAGlLSxHDE
              </a>
            </p>
            <p>
              Twitter:{" "}
              <a href="https://twitter.com/Bomb_Shelter">@Bomb_Shelter</a>
            </p>
            <p>
              Instagram:{" "}
              <a href="https://www.instagram.com/bomb.shelter.games/">
                Bomb.Shelter.Games
              </a>
            </p>
          </div>
        </div>
      </MainSection>
      <MainSection>
        <div className="PressKit-wrapper">
          <div className="PressKit-section">
            <h2>
              <span id="credits">Credits</span>
            </h2>
            <p>Bennett Tyler: Art</p>
            <p>James Salvati: Programmer and Quality Assurance</p>
            <p>Dustin Bates: Designer and Programmer</p>
            <p>Nick Masercola: Writer</p>
            <p>Kevin Kozik: Composer</p>
          </div>
        </div>
      </MainSection>
      <MainSection>
        <div className="PressKit-wrapper">
          <div className="PressKit-section">
            <h2>
              <span id="bsg-llc">Bomb Shelter Games LLC</span>
            </h2>
            <p>
              Bomb Shelter Games LLC is a Boston-based indie developer founded
              in 2009 that previously worked exclusively on PC and mobile games.
              Depths of Sanity is our first multi-platform release.
            </p>
          </div>
        </div>
      </MainSection>
      <MainSection>
        <div className="PressKit-wrapper">
          <div className="PressKit-section">
            <h2>
              <span id="website">Company Website</span>
            </h2>
            <a href="https://www.bombsheltergames.com">
              https://bombsheltergames.com
            </a>
          </div>
        </div>
      </MainSection>
      <MainSection>
        <div className="PressKit-wrapper">
          <div className="PressKit-section">
            <h2>
              <span id="contact">Contact</span>
            </h2>
            <p>
              <a href="mailto:Press@bombsheltergames.com">
                Press@bombsheltergames.com
              </a>
            </p>
          </div>
        </div>
      </MainSection>
      <Footer />
    </div>
  );
};

export default PressKit;
