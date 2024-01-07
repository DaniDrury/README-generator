const licenses = [
  {
    name: 'MIT License',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://opensource.org/licenses/MIT'
  },
  {
    name: 'Apache License 2.0',
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: 'https://opensource.org/licenses/Apache-2.0'
  },
  {
    name: 'GNU GPL v3.0',
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    link: 'https://www.gnu.org/licenses/gpl-3.0'
  },
  {
    name: 'Boost Software License 1.0',
    badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    link: 'https://www.boost.org/LICENSE_1_0.txt'
    },
  {
    name: 'GNU AGPL v3.0',
    badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    link: 'https://www.gnu.org/licenses/agpl-3.0'
  },
  {
    name: 'GNU LGPL',
    badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    link: 'https://www.gnu.org/licenses/lgpl-3.0'
  },
  {
    name: 'Mozilla Public License 2.0',
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    link: 'https://opensource.org/licenses/MPL-2.0'
  },
  {
    name: 'The Unlicense',
    badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    link: 'http://unlicense.org/'
  }
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return '';
  } else {
    for (const choice of licenses) {
      if (license === choice.name) {
        return choice.badge;
      }
    }
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
// I found this function to be unnecessary - Please see renderLicenseSection function
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license === 'No License') {
    return '';
  } else {
    for (const choice of licenses) {
      if (license === choice.name) {
        return `This project is licensed under the [${choice.name}](${choice.link}).`;
      }
    }
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    credits,
    license,
    contribute,
    tests,
    github,
    email
  } = data;
  
  const licenseBadge = renderLicenseBadge(license);
  const licenseInfo = renderLicenseSection(license);

  return `# ${title}
${licenseBadge}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${licenseInfo}

## Contributing
${contribute}

## Tests
${tests}

## Questions
To contact me with any questions regarding this project:
1. [GitHub Profile](https://github.com/${github})
2. Email me at: <${email}>`;
}

module.exports = generateMarkdown;
