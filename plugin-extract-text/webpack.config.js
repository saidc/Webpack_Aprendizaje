const path = require("path");
const mini_css_extract_plugin = require("mini-css-extract-plugin");
module.exports = {
    entry: path.resolve(__dirname,'./server.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            // aqui van los los loaders
            {
                //test: que tipo de archivo quiero reconocer,
                //use: que loader se va a encargar del archivo 
                test: /\.css$/,
                use: [mini_css_extract_plugin.loader, "css-loader"]
            }
        ]
    },
    plugins:    [
        // aqui van los plugins
        new mini_css_extract_plugin({
            filename: "css/[name].css"//"css/styles.css"
        })
    ]
}
