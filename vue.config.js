module.exports={
    //打包时去掉map文件，map文件打包上线后用处不大
    productionSourceMap:false,
    //关闭eslint语法校验
    lintOnSave:false,
    //代理跨域
    devServer:{
        proxy:{
            '/api':{
                target:'http://39.98.123.211',
                // pathRewrite:{'^/api':''},
            }
        }
    }
}