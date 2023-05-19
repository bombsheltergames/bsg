import React from 'react';
import Hero from 'Components/Hero';
import Button from 'Components/Button';
import Image from 'Components/Image';
import dosLogo from 'data/images/logo/dos-angler-logo.png';

const HeroBanner = () => {
  return (
    <Hero fullscreen>
      <h1 className="u-accessibleText">Depths of Sanity</h1>
      <Image src={dosLogo} alt="Depths of Sanity" />
      <p>
        <Button
          type="ghost-white"
          size="large"
          target="_blank"
          rel="noopener"
          href="https://store.steampowered.com/app/848080/Depths_of_Sanity/"
        >
          Buy on Steam
        </Button>
      </p>
      <p>
        <Button type="ghost-white" size="large" href="/presskit">
          Press Kit
        </Button>
      </p>
    </Hero>
  );
};

export default HeroBanner;
