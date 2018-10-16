/*
 * @Author: 李建红 
 * @Date: 2018-10-15 09:08:09 
 * @Last Modified by: 李建红
 * @Last Modified time: 2018-10-15 09:45:35
 */
/**
 * 文件配置
 */
require.config({
    /**
     * 基本路径
     */
    baseUrl: '/js/',
    paths: {
        /**
         * 三方库
         */
        "jquery": './libs/jquery-3.3.1',
        "file": "./libs/flexible",
        "hand": "./libs/handlebars-v4.0.11",
        /**
         * 自己的js
         */
        "index": "./page/index",
        "post": "./page/post",
        /**
         * 公用方法
         */
        "render": "./common/render"
    }
})