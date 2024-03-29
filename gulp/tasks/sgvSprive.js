import svgSprite from 'gulp-svg-sprite';

export const svgSprive = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: 'SVG',
            message: "Error: <%= error.messahe %>"
        })
    ))
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: '../icons/icons.svg',
                example: true
            }
        }
    }))
    .pipe(app.gulp.dest(`${app.path.build.images}`))
}