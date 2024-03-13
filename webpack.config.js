const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', // Specify the entry point
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js', // Set the output filename
        path: path.resolve(__dirname, 'dist'),
    },
};