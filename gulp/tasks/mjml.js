import mjml from 'gulp-mjml'
export const mjmlConv = () => {
    return app.gulp.src(app.path.src.mails)
        .pipe(mjml())
        .pipe(app.gulp.dest(app.path.build.mails))
}