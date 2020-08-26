const path = require('path');

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public') ,  //path to the webpack output file
            filename: 'bundle.js'       //name of webpack output file
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,           // gonna support both scss/css
                use: [      //array of loaders
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer:{
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true            //404s will fallback to index.html
        }
    }
};