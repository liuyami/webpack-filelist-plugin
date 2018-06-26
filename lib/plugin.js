var path = require('path');
var fs   = require("fs")
var glob = require('glob');



function WebpackPreloadFilelist(paths) {
    var path = paths;
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