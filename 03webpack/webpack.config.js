module.exports = {
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: {
        app: './src/ts/indexFromTS.ts'
    },
    output: {
        filename: 'js/indexFromTS.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true,
                    "babelCore": "@babel/core", // needed for Babel v7
                },
            },
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