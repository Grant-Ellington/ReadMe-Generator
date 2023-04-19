// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## Table of Contents
  * [License](#License)
  * [Title](#Title)
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Test](#Test)
  * [Technologies](#Technologies)
  * [Questions](#Questions)
  
  ## License
  
  ![License](https://img.shields.io/badge/License-${data.license}-licenseblue.svg)
  

  # ${data.title} 
  ### ${data.name}
  
  ## Description
  ${data.synopsis}
  
  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}
  
  ## Contribution 
  ${data.contributions} 
  
  ## Test
  ${data.tests}
  
  ## Questions
  For any questions, use the contacts below.
  
  [email](${data.email})
  
  [GitHub](https://github.com/${data.github})
  

`;
}

module.exports = generateMarkdown;
