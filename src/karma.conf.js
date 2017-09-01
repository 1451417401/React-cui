// Karma configuration
// Generated on Fri Sep 01 2017 10:09:00 GMT+0800 (CST)

const webpack=require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '**/test/**.js'
    ],


    // list of files to exclude
    exclude: [
        'node_modules/**/test/**'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        '**/test/**.js': ['webpack','sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage-istanbul'],

    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      dir: './coverage',
      fixWebpackSourcePaths: true,
      'report-config': {
        html: {
          // outputs the report in ./coverage/html
          subdir: 'html'
        }
      }
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['Chrome', 'PhantomJS'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack:{
        resolve: {
                extensions: ['.js', '.jsx', '.scss', '.css']
        },

        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    }
                }, 
                {
                    test: /\.(js)$/,
                    loader: 'istanbul-instrumenter-loader',
                    exclude: /node_modules/,
                    include: /^((?!test).)*$/,
                    enforce: 'post',
                    options: {
                      esModules: true
                    }
                  }, 
                  // {
                  //   test: /\.vue$/,
                  //   loaders: [{
                  //     loader: 'vue-loader',
                  //     options: {
                  //       preLoaders: {
                  //         js: 'istanbul-instrumenter-loader?esModules=true'
                  //       }
                  //     }
                  //   }]
                  // },
            ]
        },
        externals: {
            'react/addons': 'react',
            'react/lib/ExecutionEnvironment': 'react',
            'react/lib/ReactContext': 'react',
            'react-addons-test-utils': 'react-dom',
        },
        plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        })
      ]
      
    },
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },

  })
}
