const inquirer = require("inquirer");
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

function createCard() {

  return inquirer.prompt([
      {
          type: 'input',
          name: 'managerName',
          message: 'What is the name of the manager?'
      },
      {
          type: 'input',
          name: 'managerId',
          message: 'Type in their ID number'
      },
      {
          type: 'input',
          name: 'managerEmail',
          message: 'What is their email?'
      },
      {
          type: 'input',
          name: 'managerNumber',
          message: 'What is their phone number?'
      }

  ])}

console.log(createCard());
