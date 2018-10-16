/*
 * @Author: 李建红 
 * @Date: 2018-10-15 08:45:51 
 * @Last Modified by: 李建红
 * @Last Modified time: 2018-10-15 13:56:18
 */
var gulp = require('gulp');
var server = require('gulp-webserver');
var sass = require('gulp-sass');
var fs = require('fs');
var path = require('path');
var url = require('url');
var list = require('./mock/list.json');
var querystring = require('querystring')
    /**
     * 开发环境起服务
     */
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 9000,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;

                if (pathname === '/favicon.ico') {
                    res.end('');
                    return false;
                }

                if (pathname === '/api/list') {
                    res.end(JSON.stringify({ code: 1, result: list }))

                } else if (pathname === '/api/post') {
                    var arr = [];
                    req.on('data', function(chunk) {
                        arr.push(chunk);
                    });
                    req.on('end', function() {
                        var params = querystring.parse(Buffer.concat(arr).toString());
                        var tit = params.title;
                        var con = params.content;
                        var obj = {
                            "title": tit,
                            "content": con
                        }
                        console.log(obj)
                        list.unshift(obj)
                    });
                    res.end(JSON.stringify({ code: 1, msg: "发帖成功" }))
                } else {
                    pathname = pathname === '/' ? '/index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }
            }
        }))
});
/**
 * 开发环境编译scss
 */

gulp.task('devCss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
});
/**
 * 开发环境实时更新
 */
gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('devCss'));
});
/**
 * 开发环境整合执行顺序
 */
gulp.task('dev', gulp.series('devCss', 'server', 'watch'));