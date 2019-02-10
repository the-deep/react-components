const path = require('path');

const appBase = process.cwd();

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(appBase, 'build'),
        filename: 'index.js',
        library: 'reactComponents',
        libraryTarget: 'umd',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
