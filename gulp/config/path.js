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
        img: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,svg,webp}`,
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: '',
}