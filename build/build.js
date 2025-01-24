'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  const compiler = webpack(webpackConfig)
  compiler.run((err, stats) => {
    spinner.stop()
    
    if (err) {
      console.error(err.stack || err)
      if (err.details) {
        console.error(err.details)
      }
      compiler.close(() => process.exit(1))
      return
    }

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      console.log(stats.toString({
        colors: true,
        children: true,
        chunks: false,
        modules: false,
        chunkModules: false,
        errors: true,
        errorDetails: true,
      }))
      compiler.close(() => process.exit(1))
      return
    }

    if (stats.hasWarnings()) {
      console.log(chalk.yellow('  Build has warnings.\n'))
      console.log(stats.toString({
        colors: true,
        children: true,
        chunks: false,
        modules: false,
        chunkModules: false,
        warnings: true
      }))
    }

    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    compiler.close(() => {
      console.log(chalk.cyan('  Build complete.\n'))
      console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
      ))
    })
  })
})
