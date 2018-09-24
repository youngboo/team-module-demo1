const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    // module: {
    //     rules: [
    //         // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
    //         { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

    //         // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    //         { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    //     ]
    // }
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'ts-loader',
                options: {
                  transpileOnly: true
                }
              }
            ]
          },
          {
            test: /\.css?$/,
            use: [
              {
                loader: require.resolve('css-loader')
              }
            ]
          }
        ],
        
    },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname,'tsconfig.json')
      })
    ]
};