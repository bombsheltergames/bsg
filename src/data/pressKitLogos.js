// Screenshot Gallery Info
// todo - hide image info until hover; see notes
import dosLogoFull from './images/logo/depths-keyart-logo.png';
import dosSub from './images/logo/dos-keyart.png';
import dosLogo from './images/logo/dos-logo-dark.png';

// Gallery also supports "title" and "description" attributes - text strings only. Example:
/*
  {
    thumbnail: screenshot01,
    title: "Screenshot #1 Title",
    src: screenshot01,
    description: "Add informative description here! This should probably be a bunch of text explaining this screenshot. You basically have as much room as you want."
  }
*/
const pressKitLogos = [
  {
    thumbnail: dosLogoFull,
    src: dosLogoFull,
  },
  {
    thumbnail: dosSub,
    src: dosSub,
  },
  {
    thumbnail: dosLogo,
    src: dosLogo,
  },
];

export default pressKitLogos;
