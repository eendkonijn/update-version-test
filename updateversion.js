/*Bumps the version of a chosen package and writes a message to the changelog. type 'yarn bump-version <packagename> <major | minor | patch> <changelogmessage> */
const helpers = require("./helpers");
const fs = require("fs");

const version = "patch";
const packageName = "webpack";

console.log("Updating package:", packageName, ", version:", version);

//1. Update the-one/package.json
const data = fs.readFileSync("./package.json", {
  encoding: "utf8",
});

console.log("data", data);

//Split package.json into array
const dataArray = data.split("\n");

const webpackLine = dataArray[7];

//Write new version number into line and replace old array entry with the new line:
const newVersionLine = helpers.writeNewVersionLine(webpackLine, version);
dataArray[7] = newVersionLine;

//Join array into updated package.json file.
const updatedPackageJson = dataArray.join("");

//write to package.json
fs.writeFile("./package.json", updatedPackageJson, helpers.error);
