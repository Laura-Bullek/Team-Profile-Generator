# Team-Profile-Generator

## Description
The **Team-Profile-Generator** is a project from the March-August 2021 cohort from University of New Hampshire's full-stack web development course. 

Our task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. This also comes with a unit test for each part.

There is a walkthrough video below that demonstrates its functionality and all of the tests passing.

Technologies are listed below.  

## User Story
 - AS A manager
 - I WANT to generate a webpage that displays my team's basic info
 - SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
![Team-Profile-Genrerator Walkthrough Video](./assets/Good-README-Generator-Walkthrough.gif)

## Technologies
 - JavaScript
 - Node.js
 

## Credits 
The web development bootcamp program is offered through the University of New Hampshire Professional Development & Training and Trilogy Education Services.

March 2021 cohort instructors:
- Instructor - Benjamin Hutchins [GitHub](https://github.com/benhutchins)
- TA - Andrew Hatfield [GitHub](https://github.com/ALHatfield)

## Usage
* [GitHub Repository](https://github.com/Laura-Bullek/Team-Profile-Generator)

## Licensing
MIT License

Copyright (c) 2021 Laura Bullek

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.