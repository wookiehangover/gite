'use strict'

const gulp = require('gulp')
const webpack = require('webpack-stream')
const named = require('vinyl-named')
const webpackConfig = require('./webpack.config')

const devWebpackConfig = Object.assign({}, webpackConfig, { plugins: [] })
const prodWebpackConfig = Object.assign({}, webpackConfig, { watch: false })

gulp.task('webpack', () =>
  gulp.src('src/*.js')
    .pipe(named())
    .pipe(webpack(prodWebpackConfig))
    .pipe(gulp.dest('dist'))
)

gulp.task('webpack:watch', () =>
  gulp.src('src/*.js')
    .pipe(named())
    .pipe(webpack(devWebpackConfig))
    .pipe(gulp.dest('dist'))
)
