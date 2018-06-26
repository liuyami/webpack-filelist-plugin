const path = require('path');
const glob = require('glob');

class WebResourcesVersion {

    constructor(options) {

        this.options = options;

    }

    apply(compiler) {

        compiler.hooks.emit.tap('WebResourcesVersion', function(compilation) {

            let fileList = '// file list:\n\n';

            for (let filename in compilation.assets) {

                fileList += ('- ' + filename + '\n');

            }

            compilation.assets['preload.js'] = {

                source() {

                    return fileList;

                },

                size() {

                    return fileList.length

                }

            }

        });

    }

}

module.exports = WebResourcesVersion;