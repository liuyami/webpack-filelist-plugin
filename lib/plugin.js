var path = require('path');
var glob = require('glob');

var pluginName = 'webpack-preload-filelist-plugin';


function WebpackPreloadFilelist(paths, options) {


}

WebpackPreloadFilelist.prototype.apply = function(compiler) {

    compiler.hooks.emit.tap('WebpackPreloadFilelist', function(compilation) {

        let fileList = 'var resources = [ \n';

        for (let filename in compilation.assets) {

            fileList += ('"' + filename + '"\n');

        }

        compilation.assets['resources.js'] = {

            source() {

                return fileList;

            },

            size() {

                return fileList.length

            }

        }

    });
};

module.exports = WebpackPreloadFilelist;