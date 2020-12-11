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
        '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'None',
      ],
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
    }) => {
      const markdownTemplate = `
# ${title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
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
## License
${license}
`
      createReadme(markdownTemplate)
    }
  )

function createReadme(data) {
  fs.writeFile('README.md', data, (err) =>
    err ? console.error(err) : console.log('Success!')
  )
}
