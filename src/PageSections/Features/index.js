// Framework Imports
import React from "react";
// Style Imports
import "./features.css";
// Component Imports
import MainSection from "Components/MainSection";
import MainContent from "Components/MainContent";
// Image Imports
import sonarIcon from "data/images/icons/sonar.gif";
import pickupsIcon from "data/images/icons/pickups.png";
import abeIcon from "data/images/icons/abe-sm.png";
import shipIcon from "data/images/icons/ship.png";

const Features = () => (
  <MainSection>
    <MainContent>
      <ul className="Features">
        <li>
          <img src={abeIcon} alt="" />
          <h4 className="u-retroFont">Deep, Involving Storyline</h4>
          <p>
            Discover the fate of each grew member of <em>The Baroness</em> and
            uncover the mystery of the signal coming from the ocean floor.
          </p>
        </li>
        <li>
          <img src={sonarIcon} alt="" />
          <h4 className="u-retroFont">Massive Interconnected World</h4>
          <p>
            Explore beautiful coral reefs, sunken wrecks, underground magma
            lairs and much more in your journey to the darkest depths of the
            ocean.
          </p>
        </li>
        <li>
          <img src={pickupsIcon} alt="" />
          <h4 className="u-retroFont">Search, Scavenge, Survive</h4>
          <p>
            Discover advanced weaponry to help you tackle new threats, and
            attachments that unlock new traversal options, including rock
            drills, tow lines, sonar, and more.
          </p>
        </li>
        <li>
          <img src={shipIcon} alt="" />
          <h4 className="u-retroFont">Danger from Every Angle</h4>
          <p>
            With 360 degrees of movement, you're never safe in this adventure.
            Battle monstrous bosses, survive tense set-pieces, and uncover
            secrets that expand the story with your arsenal.
          </p>
        </li>
      </ul>
    </MainContent>
  </MainSection>
);

export default Features;
