
// entry -> output 
const path = require('path')
//const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // all options are optional
          filename: 'styles.css',
          chunkFilename: '[id].css',
          ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
      ],
    mode: 'development',
    entry: './src',
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, 
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  
                  {
                    loader: 'css-loader',
                   
                    options: {
                      importLoaders: 1,
                      modules: true
                    }
                  }
                ],
                include: /\.module\.css$/
              },
              {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ],
                exclude: /\.module\.css$/
              }
        ]
      },
      devServer: {
        contentBase: path.join(__dirname, 'public')
      }
    };
    