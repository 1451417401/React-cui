const ExtractTextPlugin = require('extract-text-webpack-plugin');

let fileName = __dirname.substring(__dirname.lastIndexOf('/') + 1);

module.exports = {
    entry: {
        app: "./app.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: fileName + ".js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
    },
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            //use: ['style-loader', 'css-loader', 'sass-loader'],
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader',
            })
        }, {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
            }
        }]
    },
    plugins: [
        new ExtractTextPlugin(fileName + ".css")
    ]
}
