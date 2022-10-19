import React from 'react';
import Hero from 'Components/Hero';
import Button from 'Components/Button';
import Image from 'Components/Image';
import dosLogo from 'data/images/logo/dos-angler-logo.png';

const TopSection = () => {
  const today = new Date().toISOString();
  const launch = new Date('Nov 2 2022').toISOString();
  const isLaunched = today >= launch;

  return (
    <Hero fullscreen>
      <h1 className="u-accessibleText">Depths of Sanity</h1>
      <Image src={dosLogo} alt="Depths of Sanity" />
      <p>
        <Button
          type="ghost-white"
          size="large"
          target="_blank"
          rel="noopener noreferrer"
          href="https://store.steampowered.com/app/848080/Depths_of_Sanity/"
        >
          {isLaunched ? 'Buy on Steam' : 'Launching Nov 2nd'}
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

export default TopSection;
