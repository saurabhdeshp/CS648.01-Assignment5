const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const css = () => {
    return src('src/*.scss')
        .pipe(sass())
        .pipe(dest('dist/css'))
}

exports.default = () => {
    watch('src/*.scss', css);
}