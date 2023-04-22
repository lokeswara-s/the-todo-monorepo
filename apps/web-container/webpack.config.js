const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CompressionPlugin = require("compression-webpack-plugin");

const deps = require("./package.json").dependencies;
const app_env = process.env.APP_ENV || "development";
const app_name = process.env.APP_NAME || "web-container";
const remote_path = process.env.REMOTE_PATH || "http://localhost:3000/";
const port_number = process.env.PORT || 3000;
let plugins = [
  new ModuleFederationPlugin({
    name: "the-todo-app",
    filename: `remote-entry-${app_name}.js`,
    exposes: {},
    remotes: {
    },
    shared: {
      ...deps,
      react: { singleton: true, eager: true, requiredVersion: deps.react },
      "react-dom": {
        singleton: true,
        eager: true,
        requiredVersion: deps["react-dom"],
      }
    },
  }),
  new HtmlWebPackPlugin({
    template: "src/index.html",
  }),
];

if (app_env === "production") {
  plugins.push(
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  );
}

module.exports = {
  output: {
    publicPath: remote_path,
    clean: true,
    filename: `${app_name}-[name].js`,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: port_number,
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: false,
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },

  plugins: plugins,
};