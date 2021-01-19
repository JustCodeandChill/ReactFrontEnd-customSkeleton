const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output : {
        path: path.resolve(__dirname, 'build'),
        publicPath: './',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build',
        port: 3000,
        writeToDisk: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve('./index.html'),
        }),
      ]
}