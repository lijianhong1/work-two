/*
 * @Author: 李建红 
 * @Date: 2018-10-15 09:08:02 
 * @Last Modified by: 李建红
 * @Last Modified time: 2018-10-15 09:33:54
 */

define(['jquery', 'hand'], function($, hand) {
    /**
     * 渲染
     *
     * @param   {string}  tpl       读取内容的元素
     * @param   {string}  data      数据
     * @param   {string}  init      写入到的元素
     * @param   {布尔}  isAppend    是否append
     */
    var renderTpl = function(tpl, data, init, isAppend) {
        var tplhtml = $(tpl).html();
        var template = hand.compile(tplhtml);
        var html = template(data);
        if (isAppend) {
            $(init).append(html);
        } else {
            $(init).html(html);
        }
    }
    return renderTpl;
})