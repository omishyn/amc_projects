'use strict';

const {exec} = require("child_process");

function execCommand(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    })
}

function findPrefix(projectName) {
    const partsProject = projectName.replace(/-/g, '_').replace('promo_2.0', 'promo2').split('_');

    if(isNaN(partsProject[0])) {
        if([
            'components',
            'segments',
            'common',
            'eslint',
        ].includes(partsProject[0])) {
            return 'amc';
        }

        return partsProject[0];
    }

    if(partsProject.length === 1) {
        return partsProject[0];
    }

    let part = partsProject[0];
    for(let i = 1; i < partsProject.length; i++) {
        if([
            'dwh',
            'ml',
            'service',
            'runner',
            'blackbox',
            'global',
        ].includes(partsProject[i])) {
            continue;
        }

        part = partsProject[i];
        break;
    }

    return part;
}

module.exports = {
    execCommand,
    findPrefix,
}
