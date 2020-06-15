var path = require('path');
module.exports = {
    devServer: {
        host: '0.0.0.0',
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8091,
        https: false,
        overlay: {
            warnings: false,
            errors: false
        }
    },
    lintOnSave: false,
    configureWebpack:{
        resolve:{   // 配置解析别名
            alias:{
                '@': path.resolve(__dirname, 'src')
            }
        }
    }
};
