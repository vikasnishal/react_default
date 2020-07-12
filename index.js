#!/usr/bin/env node
let shell = require("shelljs");
let colors = require("colors");
let fs = require("fs"); //fs already comes included with node.

let appName = process.argv[2];
let appDirectory = `${process.cwd()}/${appName}`;

const cloneBoilerPlate = () => {
  return new Promise(resolve => {
    if (appName) {
      shell.exec(
        `git clone https://github.com/vikasnishal/react_default.git .`,
        { cwd: appDirectory },
        () => {
          console.log("cloned react app");
          resolve(true);
        }
      );
    } else {
      console.log("\nNo app name was provided.".red);
      console.log("\nProvide an app name in the following format: ");
      console.log("\ncreate-react-walmart-app", "app-name\n".cyan);
      resolve(false);
    }
  });
};

const createNewDirectory = () => {
  return new Promise(resolve => {
    shell.exec(`mkdir ${appName}`, () => {
      console.log(`\ncreated new directory named ${appName}`.green);
      resolve();
    });
  });
};
const removeGitConfig = () => {
  return new Promise(resolve => {
    shell.exec("rm -rf .git", { cwd: appDirectory }, () => {
      resolve();
    });
  });
};
const run = async () => {
  await createNewDirectory();
  let success = await cloneBoilerPlate();
  if (!success) {
    console.log(
      "Something went wrong while trying to create a new React app".red
    );
    return false;
  }
  removeGitConfig();
  console.log("\nAll done".green);
  console.log(`\ncd into the ${appName} and run npm install`.green);
  console.log("\ngo through the default readme.md file for more info".green);
  console.log("\nuse git init to initialise git settings".green);
};
run();
