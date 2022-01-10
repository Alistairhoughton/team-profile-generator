const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const path = require("path");
const renderHtmlFile = require("./utils/renderHtml");

const template = path.join(__dirname, "teamTemplate.html");
const employeeArr = [];

function master() {
  const createManager = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "enter managers name",
        },
        {
          type: "input",
          name: "id",
          message: "Enter ID number",
        },
        {
          type: "input",
          name: "email",
          message: "enter email address",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "enter office number",
        },
      ])
      .then((data) => {
        const managerData = new Manager(
          data.name,
          data.id,
          data.email,
          data.officeNumber
        );
        employeeArr.push(managerData);
      });
  };

  const addEmployee = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "addEmployee",
          message: "enter managers name",
          choices: ["Engineer", "Intern", "No"],
        },
      ])
      .then((data) => {
        if (data.addEmployee === "Engineer") {
          createEngineer();
        } else if (data.addEmployee === "Intern") {
          createInterface();
        } else {
          renderHtml();
        }
      });
  };

  const renderHtml = () => {
    fs.writeFileSync(template, renderHtmlFile(employeeArr),'utf-8',);
 };

createManager()

}

master();
