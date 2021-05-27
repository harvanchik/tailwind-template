const gulp = require('gulp');
const { readFileSync } = require('fs');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const jsmin = require('gulp-minify');
const svgmin = require('gulp-svgmin');
const rev = require('gulp-rev');
const rewrite = require('gulp-rev-rewrite');

const destination = 'dist';  // the destination folder of the gulped content (change as needed (i.e. 'docs'))
const manifest = readFileSync('./rev-manifest.json');  // the name of the manifest file (do not edit unless you know what you're doing)

/*
 * Minify the HTML
 */
function html() {
    return gulp.src(['./**/*.html', '!./node_modules/**/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true,
            removeEmptyAttributes: true,
            removeAttributeQuotes: true
        }))
        .pipe(rewrite({ manifest }))
        .pipe(gulp.dest(`./${destination}`));
}

/*
 * Copy the Styles
 */
function styles() {
    return gulp.src(['./assets/styles/styles.css'])
        .pipe(rev())
        .pipe(gulp.dest(`./${destination}/assets/styles`))
        .pipe(rev.manifest({ merge: false }))
        .pipe(gulp.dest('./'));
}

/*
 * Minify the JavaScript
 */
function javascript() {
    return gulp.src(['./assets/js/*.js'])
        .pipe(jsmin({
            noSource: true,
            ext: { min: '.js', },
            compress: {
                dead_code: true,
                unused: true,
                drop_debugger: true
            }
        }))
        .pipe(rev())
        .pipe(gulp.dest(`./${destination}/assets/js`))
        .pipe(rev.manifest({ merge: true }))
        .pipe(gulp.dest('./'));
}

/*
 * Copy the Images
 */
function images() {
    return gulp.src(['./assets/img/**/*.{png,jpg,jpeg,jfif,gif,webp,pdf,bmp,tif,tiff,raw,cr2,nef,sr2,heif,hdr,ppm,pgm,pbm,pnm,exif}'])
        .pipe(rev())
        .pipe(gulp.dest(`./${destination}/assets/img`))
        .pipe(rev.manifest({ merge: true }))
        .pipe(gulp.dest('./'));
}

/*
 * Minify the SVGs
 */
function svg() {
    return gulp.src(['./assets/img/**/*.svg'])
        .pipe(svgmin())
        .pipe(rev())
        .pipe(gulp.dest(`./${destination}/assets/img`))
        .pipe(rev.manifest({ merge: true }))
        .pipe(gulp.dest('./'));
}

/*
 * Remove all contents within the destination folder
 */
function clean() {
    console.log('works');
    return del([`./${destination}/**`, `!./${destination}`]);
}

/*
 * The default talk (triggered when running 'gulp' in the console)
 */
gulp.task('default', gulp.series(clean, styles, javascript, images, svg, html));
