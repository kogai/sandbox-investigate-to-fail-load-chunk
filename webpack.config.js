const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoPrefixer = require("autoprefixer");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");

const input = path.resolve(__dirname);
const output = path.resolve(__dirname, "dist");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            query: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
          options: {
            minetype: "image/png",
            limit: 2 ** 8,
            name: "[path][name].[hash].[ext]",
          }
        }
      },
      {
        test: /\.pdf$/,
        use: {
          loader: "url-loader",
          options: {
            minetype: "application/pdf",
            limit: 2 ** 8,
            name: "[path][name].[hash].[ext]",
          }
        }
      }
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader
      //     },
      //     "css-modules-flow-types-loader",
      //     {
      //       loader: "css-loader",
      //       query: {
      //         modules: true,
      //         sourceMap: true,
      //         importLoaders: 2,
      //         localIdentName: "[name]__[local]___[hash:10]"
      //       }
      //     },
      //     {
      //       loader: "sass-loader",
      //       options: {
      //         outputStyle: "compress",
      //         sourceMap: false
      //       }
      //     },
      //     {
      //       loader: "postcss-loader",
      //       options: {
      //         plugins: () => [
      //           autoPrefixer({
      //             grid: true
      //           })
      //         ]
      //       }
      //     }
      //   ]
      // },
    ]
  },
  mode: "development",
  context: input,
  entry: "./a.js",
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].bundle.js",
    path: output
  },
  devtool: "source-map",
  resolve: {
    alias: {
      "@": input
    },
    extensions: [".js", ".jsx"],
    modules: ["node_modules"],
    mainFields: ["main", "module"]
  },
  plugins: [
    new CleanWebpackPlugin([output]),
    new HtmlWebpackPlugin({
      template: "./template.html"
    }),
    new ServiceWorkerWebpackPlugin({
      entry: "./sw.js"
    })
    // new MiniCssExtractPlugin({
    //   filename: "[name].[hash].css",
    //   chunkFilename: "[name].[hash].css"
    // }),
  ]
};
