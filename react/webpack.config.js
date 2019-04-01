const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: path.resolve(__dirname,'src/js/server.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "js/bundle.js",
        publicPath: "./dist/",
    },
    module:{
        rules:[
            // aqui van los los loaders
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/react']
                    }
                }
            },
            {
                test: /\.json$/,
                use: {
                    loader: "json-loader",
                }
            },
            {
                test: /\.(png|jpg|gif|woff|eot|tff|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limits: 100000
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        ExtractTextPlugin("css/[name].css")
    ]
}
