var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env => {

    // Use env.<YOUR VARIABLE> here:
    console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
    console.log('Production: ', env.production); // true

    return {
        resolve: {
            extensions: ['.js', '.ts', 'tsx']
        },
        entry: {
            app: './src/tsx/index.tsx',
            appStyles: [
                './src/sass/mystyles.scss',
            ],
        },
        output: {
            filename: 'js/[name].js',
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
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ]
                },
            ],
        },
        plugins: [
            //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
            new HtmlWebpackPlugin({
                filename: 'index.html', //Name of file in ./dist/
                template: './src/index.html', //Name of template in ./src
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css"
            }),
            new BundleAnalyzerPlugin(),
        ],
    };
};