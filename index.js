const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

inquirer
  .prompt([
    {
      name: "title",
      type: "input",
      message: "What is your project title?",
    },
  ])
  .then((answers) => {
    console.log(answers.title);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      // Something else when wrong
      console.log("Something else when wrong");
    }
  });
