const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')


const isDevMode = process.env.NODE_ENV === 'development';
const isProdMode = !isDevMode;


const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProdMode) {
        config.minimizer = [
            new OptimizeCssAssetPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
}


const filename = ext => isDevMode ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDevMode,
                reloadAll: true
            }
        },
        'css-loader'
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders;
}

const babelOptions = (preset) => {
    const options = {
        presets: [
            '@babel/preset-env',
            '@babel/preset-react'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }

    if (preset) {
        options.presets.push(preset);
    }

    return options

}

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOptions()
    }];

    if (isDevMode) {
        loaders.push('eslint-loader');
    }

    return loaders;
}


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'build'),
        publicPath: './'
    },
    resolve: {
        extensions: ['.js', '.json', '.png', '.jsx', '.svg', '.jpg', '.jpeg'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers')
        }
    },
    optimization: optimization(),
    devtool: isDevMode ? 'cheap-module-source-map' : '',
    devServer: {
        contentBase: '/',
        port: 5080,
        hot: isDevMode,
        historyApiFallback: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProdMode
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new ErrorOverlayPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-typescript')
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions()
                }
            },
            {
                test: /\.(png|jpg|svg|jpeg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}