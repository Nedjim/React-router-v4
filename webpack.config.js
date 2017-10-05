const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output: {
        path : path.resolve(__dirname, 'public'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.(s?css)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test:  /\.(jpe?g)$/, use: ['file-loader']}
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: 'src/template/index.html'
        })
    ]
}