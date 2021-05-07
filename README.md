# gulp-static-cli

[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> gulp-static-cli

## Installation

```shell
$ npm install gulp-static-cli

# or yarn
$ yarn add gulp-static-cli
```

## Usage

<!-- TODO: Introduction of Usage -->

```javascript
const gulpStaticCli = require('gulp-static-cli')
const result = gulpStaticCli('w')
// result => 'w@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### gulpStaticCli(input, options?)

#### input

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## CLI Usage

<!-- TODO: Introduction of CLI -->

Use npx:

```shell
$ npx gulp-static-cli <input> [options]
```

Globally install:

```shell
$ npm install gulp-static-cli -g
# or yarn
$ yarn global add gulp-static-cli
```

```shell
$ gulp-static-cli --help
gulp-static-cli/0.1.0

Usage:
  $ gulp-static-cli <input>

Commands:
  <input>  Sample cli program

For more info, run any command with the `--help` flag:
  $ gulp-static-cli --help

Options:
  --host <host>  Sample options
  -h, --help     Display this message
  -v, --version  Display version number

Examples:
  $ gulp-static-cli w --host zce.me
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

[MIT](LICENSE) &copy; [hynick](https://github.com/Lhynick/gulp-static-cli.git)



[license-img]: https://img.shields.io/github/license/hynick/gulp-static-cli
[license-url]: https://github.com/hynick/gulp-static-cli/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/gulp-static-cli
[downloads-url]: https://npm.im/gulp-static-cli
[version-img]: https://img.shields.io/npm/v/gulp-static-cli
[version-url]: https://npm.im/gulp-static-cli
[dependency-img]: https://img.shields.io/david/hynick/gulp-static-cli
[dependency-url]: https://david-dm.org/hynick/gulp-static-cli
[devdependency-img]: https://img.shields.io/david/dev/hynick/gulp-static-cli
[devdependency-url]: https://david-dm.org/hynick/gulp-static-cli?type=dev
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
