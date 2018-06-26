var dateObj = new Date();
var hash = Date.parse(new Date());

function WebpackFilelistPlugin(options) {

}

WebpackFilelistPlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation, callback) {

        //var dateObj = new Date();
        var filelist = '// build at ' + dateObj.toLocaleString() + ' \n\n';

        filelist += 'var filelist = [ \n ';

        for (var filename in compilation.assets) {
            filelist += '\t"' + filename + '",\n';
        }

        filelist += '];';

        // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
        compilation.assets['filelist.js'] = {
            source: function() {
                return filelist;
            },
            size: function() {
                return filelist.length;
            }
        };

        callback();
    });
};


module.exports = WebpackFilelistPlugin;
