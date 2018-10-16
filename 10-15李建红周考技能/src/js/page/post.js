/*
 * @Author: 李建红 
 * @Date: 2018-10-15 09:50:21 
 * @Last Modified by: 李建红
 * @Last Modified time: 2018-10-15 13:57:22
 */

require(["jquery", "render"], function($, render) {
    $('#post').on('click', function() {
        var title = document.querySelector('#title').value;
        var content = $('#content').val();
        if (!title || !content) {
            return alert('输入不能为空')
        }
        console.log(title, content)
        $.ajax({
            url: "/api/post",
            dataType: "json",
            type: "post",
            data: {
                title: title,
                content: content
            },
            success: function(res) {
                if (res.code === 1) {
                    alert(res.msg);
                    location.href = '../../index.html';
                    $.ajax({
                        url: "/api/list",
                        dataType: "json",
                        success: function(res) {
                            console.log(res);
                            render('#hand', res.result, '.list-inner')
                        }
                    });
                }
            }
        });

    })
})