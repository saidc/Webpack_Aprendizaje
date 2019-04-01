const path = require("path");
const mini_css_extract_plugin = require("mini-css-extract-plugin");
module.exports = {
    entry: path.resolve(__dirname,'./src/js/server.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/bundle.js',
        //publicPath:"./dist/"

    },
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        port:3000,
        disableHostCheck: true,
    },
    module:{
        rules:[ // loaders
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [mini_css_extract_plugin.loader, "css-loader"]
            }
        ]
    },
    plugins:[ //plugins
        new mini_css_extract_plugin({
            filename: "css/[name].css"
        })
    ]
}
