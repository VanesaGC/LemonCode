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
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    limit: 5000,
                    name: './img/[name].[ext]',
                }
            },
        ],
    },
};