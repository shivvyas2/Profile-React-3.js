// webpack.config.js
module.exports = {
    // Other configuration settings
    module: {
      rules: [
        {
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false,
          },
          enforce: "pre",
          use: ["source-map-loader"],
          exclude: [
            /node_modules\/@mediapipe\/tasks-vision/,
          ],
        },
      ],
    },
  };
  