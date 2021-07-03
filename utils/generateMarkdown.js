// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == undefined) {
    return '';
  }
  return 
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == undefined) {
    return '';
  }

  return `[${license}](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title: ${data.title}<br />
[$badge](https://img.shields.io/badge/license-${data.licence}-brightgreen)<br />


##name 
${data.name}<br />



## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [licence](#licence)
- [Contributors](#contributors)
- [username](#username)
- [test](#test)


## Project Description: 
  ${data.description}<br />


## installation
  ${data.installaton}<br />

## licence
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />

## contributors
  ${data.contributors}<br />


## test
${data.test}<br />

## email
  ${data.email}<br />

## username
 ${data.username}<br />


### Project GitHub Repo 
Project Repo belongs to [${data.github}](http://github.com/luvkil${data.github})

### License
${renderLicenseLink(data.licence)}

`
}




module.exports = generateMarkdown;
