'use strict';

const { execCommand, findPrefix } = require("./libs/exec");
const { PATH, PROJECTS } = require("./libs/config");
const fs = require('fs')

PROJECTS.forEach((project) => {
    const projectPrefix = findPrefix(project);
    const projectPath = [
        PATH,
        '_',
        projectPrefix,
        '/',
        project
    ].join('');

    if (fs.existsSync(projectPath)) {
        //file exists
        execCommand(`cd ${projectPath} & git fetch`);
        execCommand(`cd ${projectPath} & git pull`);
        return;
    }

    execCommand([
        `git clone git@bitbucket.org:AMC_TV/${project}.git`,
        projectPath
    ].join(' '));
})


