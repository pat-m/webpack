const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SRC_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
    mode: null,
    entry: {
        main: [`${SRC_PATH}/scripts/main.js`, `${SRC_PATH}/styles/main.scss`]
    },
    output: {
        path: `${DIST_PATH}`,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },

        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: false,
            protectWebpackAssets: false,
            dangerouslyAllowCleanPatternsOutsideProject: true
        })
    ],
    stats: {
        all: undefined,
        assets: false,
        assetsSort: '!size',
        builtAt: true,
        cached: true,
        cachedAssets: true,
        children: false,
        chunks: true,
        chunkGroups: false,
        chunkModules: false,
        chunkOrigins: false,
        chunksSort: 'name',
        //context: '../src/components/',
        //colors: true,
        colors: {
            green: '\u001b[32m',
        },
        depth: false,
        entrypoints: false,
        env: false,
        errors: true,
        errorDetails: false,
        excludeAssets: [
            'filter',
            /filter/,
            //(assetName) => assetName.contains('moduleA')
        ],
        excludeModules: [
            'filter',
            /filter/,
            //(moduleSource) => true
        ],
        //excludeModules: false,
        //logging: 'verbose',
        loggingDebug: [
            'MyPlugin',
            /MyPlugin/,
            //(name) => name.contains('MyPlugin')
        ],
        loggingTrace: false,
        maxModules: 10,
        modules: false,
        modulesSort: 'size',
        moduleTrace: false,
        outputPath: false,
        performance: false,
        providedExports: false,
        publicPath: false,
        reasons: false,
        source: false,
        timings: false,
        usedExports: false,
        version: false,
        warnings: false,
        warningsFilter: [
            'filter',
            /filter/,
            (warning) => false
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
};