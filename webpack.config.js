const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output: {
        path : path.resolve(__dirname, 'public'),
        filename : 'bundle.js',
        publicPath: '/' // routes
    },
    module : {
        rules : [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.(s?css)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test:  /\.(jpe?g)$/, use: ['file-loader']}
        ]
    },
    devServer: {  
        historyApiFallback: true, // routes
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: 'src/template/index.html'
        })
    ]
}