module.exports = {
    entry: ['./src/js/index.js'],
    output: {
        filename: 'js/index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
};