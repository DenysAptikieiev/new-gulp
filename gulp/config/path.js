import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve())
const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        scss: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        images: `${buildFolder}/images/`,
        fonts: `${buildFolder}/fonts/`,
        mails: `${buildFolder}/mails/`
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/images/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
        mails: `${srcFolder}/mails/*.mjml`
    },
    watch: {
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,ico,svg,webp}`,
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        mails: `${srcFolder}/mails/**/*.mjml`
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: '',
}