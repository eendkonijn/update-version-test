# Update version error reproduction

To reproduce error:

1. run `node updateversion.js`

The script reads and logs package.json.

In package.json, webpack version will be updated to 5.8.1

2. run the same command again.

The script now logs package.json differently, making the script break.