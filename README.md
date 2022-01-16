# Readme Generator

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

This command line app generates a team template. With 3 profiles availible, Manager which is unique and can only have on. Then 2 other roles which are unlimited in number being engineer
and intern. Once completed a responsive HTML file will be generated with all the information, colour coded headers, icons and a clickable GitHub link for the engineer. 

Tests are also availible to make sure the code passes. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](https://i.gyazo.com/38dbd2728b672d75b0440880f8d41d8b.png)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install this project simply navigate to the root folder or even individual files you wish to run and use 'npm i' in your termimal. 

## Usage

Once you have installed the required packages, inquierer and jest. You will then simply be able to run the application in the terminal. Navigate to the index.js file and run 
the command 'node index.js'. You will be then prompted to enter manager details, once that is complete you can cycle through as many times as you like and enter engineer and intern 
details and once finished answer no. Your HTML file will be generate in the root called team.html. 

## Screenshot

In addition to the screenshot. Here is a link to the video walkthrough of how to use the application - https://www.youtube.com/watch?v=jlqegJoddGk

![Screenshot](https://i.gyazo.com/eef50bd7493b0f60b7c1ecb9d0709c74.png)
![Screenshot](https://i.gyazo.com/84c67e54f4f4c4d51bb3822ec4edcf9d.png)

In addition to screenshots there are some video links. 

Walkthrough of the application - https://www.youtube.com/watch?v=zRGQY3WN8-4

Running the tests - https://www.youtube.com/watch?v=4niMsfrXVlw

## License

https://opensource.org/licenses/MIT

This project is under the license of MIT

## Contributing

Alistair Houghton

## Tests

The application comes with 4 tests, to make sure each class passes when you are creating the profiles. the four classes which are tested are

-Employee
-Manager
-Intern
-Engineer

In order to run the tests, make sure you have followed the installation guides and have got Jest as a dependency in your package.JSON. If you don't please use 'npm i' in order to install them.
Once you have done that simply navigate to the test folder and open whichever file you would like in the terminal for example the Manager.test.js. 

Then in the terminal enter 'npm test' 

Wait for the tests to finish and it will print the results in the terminal if they have all passed or if there is an error. 

## Questions

If you have any questions about this project, you can contact me at my github . More projects available here https://github.com/Alistairhoughton.
