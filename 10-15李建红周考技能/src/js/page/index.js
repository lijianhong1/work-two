/*
 * @Author: 李建红 
 * @Date: 2018-10-15 09:59:09 
 * @Last Modified by:   李建红 
 * @Last Modified time: 2018-10-15 09:59:09 
 */

require(["jquery", "render"], function($, render) {
    $.ajax({
        url: "/api/list",
        dataType: "json",
        success: function(res) {
            console.log(res);
            render('#hand', res.result, '.list-inner')
        }
    });
    $('#btm').on('click', function() {
        location.href = '../../post.html';
    })
})