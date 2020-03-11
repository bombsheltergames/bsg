import React from "react";
import Hero from "Components/Hero";
import Button from "Components/Button";
import Image from "Components/Image";
// Hero Banner Images
import dosHero from "data/images/hero/dos-hero.png";
import dosHeroThumbnail from "data/images/hero/dos-hero.thumb.png";
import dosLogoThumbnail from "data/images/logo/dos-tentacles-sm.png";
import dosLogo from "data/images/logo/dos-tentacles.png";

const TopSection = () => {
  return (
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
  );
};

export default TopSection;
