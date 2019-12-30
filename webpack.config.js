const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    "entry": "./src/components/index.jsx",
    "output": {
        "path": path.join(__dirname, "/bundle"),
        "filename": "index_bundle.js"
    },
    "devServer": {
        "inline": true,
        "port": 8000,
        "hot": true,
        "watchContentBase": true,
        "host": '192.168.43.216'
    },
    "module": {
        "rules": [
            {
                "test": /\.jsx?$/u,
                "exclude": /node_modules/u,
                "loader": "babel-loader"
            },
            {   "test": /\.css$/u,
                "use": ["style-loader", "css-loader"]
            }
        ]
    },
    "plugins": [
        new HtmlWebpackPlugin({
            "template": "./public/index.html"
        })
    ]
};
