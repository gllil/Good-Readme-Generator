function generateMarkdown(info) {
  return `
  !https://img.shields.io/badge/version-1.0-orange
# ${info.title} 

## Description

${info.description} 

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Contributing](#contributing)
* [Questions?](#questions)

## Installation

To install project dependencies run:

\`\`\`
${info.installation}
\`\`\`

## Tests

To run tests run:

\`\`\`
${info.tests}
\`\`\`

## Usage

${info.usage}

## License

${info.license} 

## Contributing

${info.contributing}

## Questions?

<img src="${info.picture}" alt="avatar-picture" style="border-radius: 50px" width="100px" />
Have any questions? Want to collaborate on a project? Shoot me an [email](${info.email})
`;
}

module.exports = generateMarkdown;
