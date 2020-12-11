const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

inquirer.prompt([
  {
    name: "title",
    type: "input",
    message: "What is your project title?",
  },
  {
    name: "description",
    type: "input",
    message: "Please give a brief description of your project",
  },
  {
    name: "installation",
    type: "input",
    message: "How will users install your application?",
  },
  {
    name: "usageInformation",
    type: "input",
    message: "Provide an example of how users will use your application",
  },
  {
    name: "contributionGuidelines",
    type: "input",
    message: "How can others contribute to your application?",
  },
  {
    name: "testInstructions",
    type: "input",
    message: "How can users test your applications?",
  },
  {
    name: "testInstructions",
    type: "list",
    message: "What license does this application use?",
    choices: ["MIT License", "None"],
  },
]);
