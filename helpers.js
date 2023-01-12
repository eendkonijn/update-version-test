//Function for updating the line in a package.json that contains the version
const writeNewVersionLine = (line, versionType) => {
  const reverseString = (string) => {
    return string.split("").reverse().join("");
  };

  const versionTable = {
    patch: 2,
    minor: 4,
    major: 6,
  };

  //reverse the line so we can get to the version number:
  const reversedLine = reverseString(line);

  //replace old version number with new version number
  const newLineReversed =
    reversedLine.substring(0, versionTable[versionType]) +
    (+reversedLine.charAt(versionTable[versionType]) + 1) +
    reversedLine.substring(versionTable[versionType] + 1);

  //reverse string back to normal and return is
  return reverseString(newLineReversed);
};

const error = (err) => {
  if (err) {
    return console.error(err);
  }
};

module.exports = { writeNewVersionLine, error };
