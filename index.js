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
      choices: ['MIT License', 'None'],
    },
    return `
# ${data.Title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)
## Description
${data.Description}
## Installation 
${data.Installation}
## Usage 
${data.Usage}
## License
${data.License}
## Contributors
${data.Contributors}
## Test
${data.Test}
## Questions
Contact me:
Github:[${data.Username}](https://github.com/DiLiubarets)
Email:[${data.Email}](https://github.com/DiLiubarets)
`;
  ])
  .then((response) =>
    fs.writeFile('READMEE.md', data, (err) =>
      err ? console.error(err) : console.log('Success!')
    )
  )
