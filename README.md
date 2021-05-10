# GServe

[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> A gulp workflow for web app

## Installation

```shell
$ npm install gserve --dev

# or yarn
$ yarn add gserve --dev
```

## Usage
- Default Project Framework
  ```
    .
    ├── src
    |    ├── public
    |    ├── assets
    |    |     ├── styles ··················· Sass Stylesheet
    |    |     ├── images
    |    |     ├── fonts
    |    |     └── scripts ·················· Javascript File
    |    └── index.html
    ├── pages.config.js ····················· Gserve Config
    └── package.json
  ```
  - pages.config.js
    ```Javascript
      // default config
      module.exports = {
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
    ```
- Usage
  ```shell
    Start develop server:
      yarn gserve develop
    
    Build for prouduction:
      yarn gserve build
  ```

## Related

- [zce/caz](https://github.com/zce/caz) - A simple yet powerful template-based Scaffolding tools.

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [lhynick](https://github.com/Lhynick/gserve.git)



[license-img]: https://img.shields.io/github/license/lhynick/gserve
[license-url]: https://github.com/lhynick/gserve/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/gserve
[downloads-url]: https://npm.im/gserve
[version-img]: https://img.shields.io/npm/v/gserve
[version-url]: https://npm.im/gserve
[dependency-img]: https://img.shields.io/david/lhynick/gserve
[dependency-url]: https://david-dm.org/lhynick/gserve
[devdependency-img]: https://img.shields.io/david/dev/lhynick/gserve
[devdependency-url]: https://david-dm.org/lhynick/gserve?type=dev
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
