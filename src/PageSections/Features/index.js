// Framework Imports
import React from "react";
// Style Imports
import "./features.css";
// Component Imports
import MainSection from "Layout/MainSection";
import MainContent from "Layout/MainContent";
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
          <h4 className="u-retroFont">Search, Scavenge, Stay Alive</h4>
          <p>
            Danger comes from every angle. Unlock a wide variety of weapons to
            help you battle monstrous bosses, survive tense set-pieces, and
            uncover secrets that expand the story and your chances of survival.
          </p>
        </li>
        <li>
          <img src={shipIcon} alt="" />
          <h4 className="u-retroFont">Danger from Every Angle</h4>
          <p>
            With full 360 degree movement, there are no double jumps or wall
            runs to help you under the ocean. Use a wide range of unique tools
            to uncover your environment, including tow lines that help you pull
            through heavy currents, and a sonar system that helps you navigate
            through pitch black darkness
          </p>
        </li>
      </ul>
    </MainContent>
  </MainSection>
);

export default Features;
