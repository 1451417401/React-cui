const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        app: "./index.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "index.js"
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
            },
            exclude: /node_modules/,
        }]
    },
    plugins: [
        new ExtractTextPlugin("index.css")
    ]
}
