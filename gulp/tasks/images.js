import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const img = () => {
    return app.gulp.src(app.path.src.img)
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: 'img',
        message: "Error <%= error.message %>"
    })))
    .pipe(app.plugins.newer(app.path.build.img))

    .pipe(webp({
        quality: 5,
    }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.images))
    .pipe(app.plugins.newer(app.path.build.images))

    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true,
        optimizationLevel: 4 // 0 to 7
    }))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.img))
    
    .pipe(app.plugins.browsersync.stream())
}