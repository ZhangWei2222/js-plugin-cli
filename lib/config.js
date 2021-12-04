const fse = require('fs-extra')

const path = require('path')

const jsonConfig = {
  "name": "js-plugin-cli",
  "mirror": "https://xxx"
}

const configPath = path.resolve(__dirname, '../config.json')

async function defConfig() {
  try {
    await fse.outputJson(configPath, jsonConfig)
  } catch (err) {
    console.error(err)
    process.exit()
  }
}

module.exports = defConfig