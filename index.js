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
          message: 'Type in the ID number'
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

function internInfo() {

  return inquirer.prompt([
      {
          type: 'input',
          name: 'internName',
          message: 'What is the name of the intern?'
      },
      {
          type: 'input',
          name: 'internId',
          message: 'Type in the ID number'
      },
      {
          type: 'input',
          name: 'internEmail',
          message: 'What is their email?'
      },
      {
          type: 'input',
          name: 'internSchool',
          message: 'What school did the intern attend?'
      }
  ])}

  function engineerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of the engineer?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Type in the ID number'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is their email?'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the GitHub username of the engineer?'
        }
    ])}
  