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
- [usage](#usage)
- [licence](#licence)
- [Contributors](#contributors)
- [username](#username)
- [questions](#questions)


## Project Description: 
  ${data.description}<br />


## installation
  ${data.installaton}<br />

##usage
${data.usage}

## licence
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />

## contributors
  ${data.contributors}<br />


## test
${data.questions}<br />

##Find me on GitHub:
[${data.username}](https://github.com/${data.username})<br />
<br />
 ##Email me with any questions: 
 ${answers.email}<br />
 <br />
##This README was generated with by:
[README-generator](https://github.com/luvkil/my-readme-generator)

### License
${renderLicenseLink(data.licence)}

`
}




module.exports = generateMarkdown;
