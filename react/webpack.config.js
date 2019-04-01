const path = require("path");
const mini_css_extract_plugin = require("mini-css-extract-plugin");
module.exports = {
    entry: path.resolve(__dirname,'./server.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/bundle.js',
        publicPath:"./dist/"
    },
    devServer:{
        port:3000
    },
    module:{
        rules:[ // loaders
            {
                test: /\.css$/,
                use: [mini_css_extract_plugin.loader, "css-loader"]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins:[ //plugins
        new mini_css_extract_plugin({
            filename: "css/[name].css"
        })
    ]
}
