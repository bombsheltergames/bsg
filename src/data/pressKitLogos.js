// Screenshot Gallery Info
// todo - hide image info until hover; see notes
import dosAngler from "./images/logo/dos-angler-logo.png";
import dosTentacles from "./images/logo/dos-tentacles-2020.png";

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
    thumbnail: dosAngler,
    src: dosAngler,
  },
  {
    thumbnail: dosTentacles,
    src: dosTentacles,
  },
];

export default pressKitLogos;
