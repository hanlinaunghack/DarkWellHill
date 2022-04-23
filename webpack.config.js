const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
<<<<<<< HEAD
        use: ["style-loader", "css-loader"],
=======
        use: ["style-loader", "css-loader"]
>>>>>>> 9f8bb1c929103c2f3a6ff3b2bda33737c640d703
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
<<<<<<< HEAD
            loader: "file-loader",
          },
        ],
      },
    ],
  },
=======
            loader: "file-loader"
          }
        ]
      }
    ]
  }
>>>>>>> 9f8bb1c929103c2f3a6ff3b2bda33737c640d703
};
