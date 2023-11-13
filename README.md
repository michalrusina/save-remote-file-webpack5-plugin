# Save Remote File Webpack 5 Plugin

This webpack plugin allows yout to download external files at build time and add it to Webpack assets.

## Installation

Install the module

```bash
npm install michalrusina/save-remote-file-webpack5-plugin --save-dev
```

**Note**: This package requires Node.js 18.0.0 or later. It also requires webpack 5 and newer. It is not compatible with older versions.

## Usage

Use this plugin as you would other webpack plugins:

```js
// webpack.config.js
const SaveRemoteFileWebpack5Plugin = require('save-remote-file-webpack5-plugin');

module.exports = {
	// ...
	plugins: [
		new SaveRemoteFileWebpack5Plugin([
			{
				url: 'https://foo.com/foo.js',
				filepath: 'build/foo.js'
			},
			{
				url: 'https://bar.com/bar.css',
				filepath: 'build/bar.css'
			}
			// ...
		])
	]
};
```

## Options

Plugin receives an array of files to download and paths where to output these files.

`url` (string) - Download file from this URL

`filepath` (string) - Path and filename where to save the file
