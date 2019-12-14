const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

// for exporting this object
console.log(`current path ${__dirname}`); // todo remove later
module.exports = {
    entry:['babel-polyfill','./starter/src/js/index.js'],
    output:{
        path:path.join(__dirname,'starter/dist'),
        filename:'./js/bundle.js'
    },
    devServer:{
        contentBase:'./starter/dist'
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:path.resolve(__dirname,'starter/src/index.html')
        })
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader:'babel-loader'
                }
            }
        ]
    }
};