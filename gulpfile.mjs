import gulp from 'gulp';
import { readFileSync } from 'fs';
import { deleteAsync } from 'del';
import htmlmin from 'gulp-htmlmin';
import jsmin from 'gulp-minify';
import svgmin from 'gulp-svgmin';
import image from 'gulp-image';
import rev from 'gulp-rev';
import rewrite from 'gulp-rev-rewrite';

const root = './'; // the path to the root of your project (you probably do not need to change this)
const destination = `${root}dist`; // the destination folder of the gulped content (change as needed (i.e. 'docs'))
const manifest = `${root}rev-manifest.json`; // the name of the manifest file (do not edit unless you know what you're doing)

/**
 * Minify the HTML
 */
function html() {
  return gulp
    .src([
      `${root}**/*.html`,
      `!${root}node_modules/**/*.html`,
      `!${destination}/**/*.html`,
    ])
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
        removeEmptyAttributes: true,
        removeAttributeQuotes: true,
      })
    )
    .pipe(rewrite({ manifest: readFileSync(manifest) }))
    .pipe(gulp.dest(destination));
}

/**
 * Copy the Styles
 */
function styles() {
  return gulp
    .src([`${root}assets/styles/styles.css`])
    .pipe(rev())
    .pipe(gulp.dest(`${destination}/assets/styles`))
    .pipe(rev.manifest(manifest, { merge: false }))
    .pipe(gulp.dest(root));
}

/*
 * Minify the JavaScript
 */
function javascript() {
  return gulp
    .src([`${root}assets/js/*.js`])
    .pipe(
      jsmin({
        noSource: true,
        ext: { min: '.js' },
        compress: {
          dead_code: true,
          unused: true,
          drop_debugger: true,
        },
        output: {
          comments: false,
          quote_style: 1,
        },
      })
    )
    .pipe(rev())
    .pipe(gulp.dest(`${destination}/assets/js`))
    .pipe(rev.manifest(manifest, { merge: true }))
    .pipe(gulp.dest(root));
}

/**
 * Copy & Optimize the Images
 */
function images() {
  return gulp
    .src([
      `${root}assets/img/**/*.{png,jpg,jpeg,jfif,gif,webp,pdf,bmp,tif,tiff,raw,cr2,nef,sr2,heif,hdr,ppm,pgm,pbm,pnm,exif}`,
    ])
    .pipe(
      image({
        quiet: true, // set to false to log results for every image processed
      })
    )
    .pipe(rev())
    .pipe(gulp.dest(`${destination}/assets/img`))
    .pipe(rev.manifest(manifest, { merge: true }))
    .pipe(gulp.dest(root));
}

/**
 * Minify the SVGs
 */
function svg() {
  return gulp
    .src([`${root}assets/img/svg/*.svg`])
    .pipe(svgmin())
    .pipe(rev())
    .pipe(gulp.dest(`${destination}/assets/img/svg`))
    .pipe(rev.manifest(manifest, { merge: true }))
    .pipe(gulp.dest(root));
}

/**
 * Remove all content within the destination folder
 */
function clean() {
  return deleteAsync([`${destination}`]);
}

/**
 * The default task (triggered when running 'gulp' in the console)
 */
gulp.task('default', gulp.series(clean, styles, javascript, images, svg, html));
/**
 * Task to remove the destination folder and its contents.
 */
gulp.task('clean', clean);
