import dartSass from 'sass'; 
import gulpSass from 'gulp-sass'; 
import rename from 'gulp-rename'; 

import cleanScss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: 'SCSS',
        message: "Error <%= error.message %>"
    })))
    .pipe(app.plugins.replace(/@img\//g, 'images/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(groupCssMediaQueries())
    .pipe(webpcss({
        webpClass: '.webp',
        noWebpClass: '.no-webp'
    }))
    .pipe(autoprefixer({
        grid: true,
        overrideBrowserlist: ["last 5 versions"],
        cascade: true
    }))
    .pipe(app.gulp.dest(app.path.build.scss))
    .pipe(cleanScss())
    .pipe(rename({
        extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.scss))
    .pipe(app.plugins.browsersync.stream());
}