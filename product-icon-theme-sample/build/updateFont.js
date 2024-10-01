const webfont = require('webfont');
const fs = require('fs');
const path = require('path');

const svgs = [
  "expando-collapsed.svg",
  "copilot-icon.svg",
  "extensions.svg",
  "comment-discussion.svg",
  "beaker.svg",
  "debug.svg",
  "scm.svg",
  "github-icon.svg",
  "remote-explorer.svg",
  "file.svg",
  "search.svg",
  "gitlens.svg",
  "Group 49.svg",
  "Group 50.svg",
  "Group 51.svg",
  "Group 52.svg",
  "Group 53.svg",
  "Group 54.svg",
  "Group 55.svg",
  "Group 56.svg",
  "Group 57.svg",
  "Group 58.svg",
  "Group 59.svg",
  "Group 62.svg",
  "Group 63.svg",
  "Group 68.svg",
  "Group 69.svg",
  "Group 70.svg",
  "Group 71.svg",
  "Group 73.svg",
  "Group 74.svg",
  "Group 75.svg",
  "Group 76.svg",
  "Group 78.svg",
  "Group 80.svg",
].map(name => path.join(__dirname, '..', 'icons', name));

async function generateFont() {

  try {
    const result = await webfont.webfont({
      files: svgs,
      formats: ['woff'],
      startUnicode: 0xE000,
      verbose: true,
      normalize: true,
      sort: false
    });
    const dest = path.join(__dirname, '..', 'theme', 'vscode-10.woff')
    fs.writeFileSync(dest, result.woff, 'binary');
    console.log(`Font created at ${dest}`);
  } catch (e) {
    console.error('Font creation failed.', e);
  }
}

generateFont();


