const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

inquirer
  .prompt([
    {
      name: 'title',
      type: 'input',
      message: 'What is your project title?',
    },
    {
      name: 'description',
      type: 'input',
      message: 'Please give a brief description of your project',
    },
    {
      name: 'installation',
      type: 'input',
      message: 'How will users install your application?',
    },
    {
      name: 'usageInformation',
      type: 'input',
      message: 'Provide an example of how users will use your application',
    },
    {
      name: 'contributionGuidelines',
      type: 'input',
      message: 'How can others contribute to your application?',
    },
    {
      name: 'testInstructions',
      type: 'input',
      message: 'How can users test your applications?',
    },
    {
      name: 'license',
      type: 'checkbox',
      message: 'What license does this application use?',
      choices: [
        {
          name: 'MIT',
          value:
            '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        },
        {
          name: 'Apache-2.0',
          value:
            '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        },
        {
          name: 'ISC',
          value:
            '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        },
      ],
    },
    {
      name: 'githubUsername',
      type: 'input',
      message: 'What is your Github username?',
    },
    {
      name: 'emailAddress',
      type: 'input',
      message: 'What is your email address?',
    },
  ])
  .then(
    ({
      title,
      description,
      installation,
      usageInformation,
      contributionGuidelines,
      testInstructions,
      license,
      githubUsername,
      emailAddress,
    }) => {
      const markdownTemplate = `
# ${title}
## License
${license}
## Table of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)
## Description
${description}
## Installation 
${installation}
## Usage 
${usageInformation}
## Contributors
${contributionGuidelines}
## Test
${testInstructions}
## Questions
Contact me:
Github:[${githubUsername}](https://github.com/${githubUsername}/)/n
Email:[${emailAddress}](${emailAddress})
`
      createReadme(markdownTemplate)
    }
  )

function createReadme(data) {
  fs.writeFile('README.md', data, (err) =>
    err ? console.error(err) : console.log('Success!')
  )
}
