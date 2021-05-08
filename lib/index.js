const del = require('del')
const browserSync = require('browser-sync')
const bs = browserSync.create()

const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')

const { src, dest, series, parallel, watch } = gulp
const plugins = gulpLoadPlugins()

let config = {
  output: 'dist',
  temp: 'dist/temp',
  src: 'src',
  path: {
    style: 'assets/styles/*.scss',
    script: 'assets/scripts/*.js',
    image: 'assets/images/**',
    font: 'assets/fonts/**',
    html: '*.html'
  },
  public: 'public',
  data: {}
}

const cwd = process.cwd()

try {
  const loadConfig = require(`${cwd}/pages.config.js`)
  config = Object.assign({}, config, loadConfig)
} catch {}


const clean = () => {
  return del([config.output])
}

const cleanTemp = () => {
  return del([config.temp])
}

const style = () => {
  return src(config.path.style, { base: 'src', cwd: config.src })
    .pipe(plugins.sass({
      outputStyle: 'expanded'
    }))
    .pipe(dest(config.temp))
    .pipe(bs.reload({ stream: true }))
}

const script = () => {
  return src(config.path.script, { base: config.src, cwd: config.src })
    .pipe(plugins.babel({
      presets: [require('@babel/preset-env')]
    }))
    .pipe(dest(config.temp))
    .pipe(bs.reload({ stream: true }))
}

const page = () => {
  return src(config.path.html, { base: config.src, cwd: config.src })
    .pipe(plugins.swig({
      data: config.data,
      defaults: {
        cache: false
      }
    }))
    .pipe(dest(config.temp))
    .pipe(bs.reload({ stream: true }))
}

const image = () => {
  return src(config.path.image, { base: config.src, cwd: config.src })
    .pipe(plugins.imagemin())
    .pipe(dest(config.output))
}

const font = () => {
  return src(config.path.font, { base: config.src, cwd: config.src })
    .pipe(plugins.imagemin())
    .pipe(dest(config.output))
}

const extra = () => {
  return src('**', { base: config.public, cwd: config.public })
    .pipe(dest(config.output))
}

const useref = () => {
  return src(`${config.temp}/*.html`)
    .pipe(plugins.useref({
      searchPath: [config.temp, '.']
    }))
    .pipe(plugins.if(/\.js$/, plugins.uglify()))
    .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
    .pipe(plugins.if(/\.html$/, plugins.htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    })))
    .pipe(dest(config.output))
}

const serve = () => {
  watch(`${config.src}/${config.path.style}`, style)
  watch(`${config.src}/${config.path.script}`, script)
  watch(`${config.src}/${config.path.html}`, page)
  watch([
    `${config.src}/${config.path.image}`,
    `${config.src}/${config.path.font}`,
    `${config.public}/**`
  ], bs.reload)
  

  bs.init({
    notify: false,
    port: 8090,
    server: {
      baseDir: [config.temp, 'src', 'public'],
      routes: {
        '/node_modules': 'node_module'
      }
    }
  })
}

const compile = parallel(style, script, page)

const develop = series(
  compile,
  serve
)

const build = series(
  clean,
  parallel(
    series(compile, useref),
    image,
    font,
    extra
  ),
  cleanTemp
)


module.exports = {
  develop,
  build,
  clean
}