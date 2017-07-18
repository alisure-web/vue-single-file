module.exports = {
    // 入口文件
    entry: __dirname + '/src/main.js',
    // 编译输出的文件路径
    output: {
        path: __dirname + '/dist',
        filename: 'build.js'
    },
    //加载器
    module: {
        loaders: [{
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    // 解决运行时问题
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};