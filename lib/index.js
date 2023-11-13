const webpack = require('webpack');
const {RawSource} = webpack.sources;
const {WebpackError} = webpack;

class SaveRemoteFileWebpack5Plugin {
	pluginName = 'SaveRemoteFileWebpack5Plugin'
	options;

	constructor(options) {
		if (options instanceof Array) {
			this.options = options;
		} else {
			this.options = [options];
		}
	}

	apply(compiler) {
		compiler.hooks.compilation.tap(this.pluginName, async (compilation) => {
			compilation.hooks.additionalAssets.tapPromise(this.pluginName, async () => {
				const downloadFiles = async (option) => {
					try {
						const {url, filepath} = option;

						console.log('Downloading: ' + url);

						const resp = await fetch(url);
						const arrBuffer = await resp.arrayBuffer();

						compilation.emitAsset(
							filepath,
							new RawSource(Buffer.from(arrBuffer))
						);
					} catch (err) {
						console.log(err)

						if (err instanceof Error) {
							compilation.errors.push(new WebpackError(err.message));
						}
					}
				};

				for (const item of this.options) {
					await downloadFiles(item)
				}
			});
		});
	}
}

module.exports = SaveRemoteFileWebpack5Plugin;
