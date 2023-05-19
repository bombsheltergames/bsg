// Screenshot Gallery Info
// todo - hide image info until hover; see notes
import screenshot01 from "../images/screenshots/presskit/01.jpg";
import screenshot02 from "../images/screenshots/presskit/02.png";
import screenshot03 from "../images/screenshots/presskit/03.png";
import screenshot04 from "../images/screenshots/presskit/04.png";
import screenshot05 from "../images/screenshots/presskit/05.png";
import screenshot06 from "../images/screenshots/presskit/07.png";

// Gallery also supports "title" and "description" attributes - text strings only. Example:
/*
  {
    thumbnail: screenshot01,
    title: "Screenshot #1 Title",
    src: screenshot01,
    description: "Add informative description here! This should probably be a bunch of text explaining this screenshot. You basically have as much room as you want."
  }
*/
const pressKitScreenshots = [
  {
    thumbnail: screenshot01,
    src: screenshot01,
  },
  {
    thumbnail: screenshot02,
    src: screenshot02,
  },
  {
    thumbnail: screenshot03,
    src: screenshot03,
  },
  {
    thumbnail: screenshot04,
    src: screenshot04,
  },
  {
    thumbnail: screenshot05,
    src: screenshot05,
  },
  {
    thumbnail: screenshot06,
    src: screenshot06,
  },
];

export default pressKitScreenshots;
