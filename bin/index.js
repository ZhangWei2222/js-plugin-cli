#!/usr/bin/env node

const program = require('commander')
const updateChk = require('../lib/update')
const setMirror = require('../lib/mirror')
const dlTemplate = require('../lib/download')
const initProject = require('../lib/init')

program.version(require('../package.json').version, '-v, --version')

program
  .command('upgrade')
  .description("Check the js-plugin-cli version.")
  .action(() => {
    updateChk()
  })

program
  .command('mirror <template_mirror>')
  .description("Set the template mirror.")
  .action((tplMirror) => {
    setMirror(tplMirror)
  })

program
  .command('template')
  .description("Download template from mirror.")
  .action(() => {
    dlTemplate()
  })

program
  .name('js-plugin-cli')
  .usage('<commands> [options]')
  .command('init <project_name>')
  .description('Create a javascript plugin project.')
  .action(project => {
    initProject(project)
  })

program.parse(process.argv)