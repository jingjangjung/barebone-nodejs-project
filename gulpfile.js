var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var rimraf = require('rimraf'); 
var paths = require('./config.json');


/**
* simple server
*/

gulp.task('serve',['less', 'coffee','fonts','templates','vendor'],function() {
  gulp.src(paths.dist.server)
    .pipe(plugins.webserver({
	  port:3000,
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

/**
 * compiles less files into css.
 */
gulp.task('vendor', function() {
  gulp.src(paths.vendor.js)
  .pipe(gulp.dest(paths.dist.vendor.js));
  gulp.src(paths.vendor.css)
  .pipe(gulp.dest(paths.dist.vendor.css));
});

/**
 * copy font files.
 */
gulp.task('fonts', function() {
  gulp.src(paths.vendor.fonts)
  .pipe(gulp.dest(paths.dist.vendor.fonts));
});

/**
 * removes css- and js-dist folder.
 */
gulp.task('clean', function() {
  rimraf.sync(paths.dist.css);
  rimraf.sync(paths.dist.js);
  rimraf.sync(paths.dist.coffee);
})
 
/**
 * compiles less files into css.
 */
gulp.task('less', function() {
  gulp.src(paths.less)
    .pipe(plugins.less())
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest(paths.dist.css));
});

/**
* compile coffeescript to javascript
*/

gulp.task('coffee', function() {
  gulp.src(paths.coffee)
    .pipe(plugins.coffee({bare: true}).on('error', console.log))
    .pipe(gulp.dest(paths.dist.coffee))

  gulp.src('./src/app/*.coffee')
    .pipe(plugins.coffee({bare: true}).on('error', console.log))
    .pipe(gulp.dest(paths.dist.server))
});


gulp.task('templates', function() {
 
  gulp.src('./src/app/index.jade')
    .pipe(plugins.jade({
      locals:paths.js,
      pretty:true
    })).pipe(gulp.dest(paths.dist.server));

  gulp.src(paths.js)
    .pipe(plugins.jade({
      pretty:true,
      locals:paths.js
    })).pipe(gulp.dest(paths.dist.js));

});
  
gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
  console.log('watching directory:' + paths.less.join(', '));
  
  gulp.watch(paths.js, ['templates']);
  console.log('watching directory:' + paths.js.join(', '));
 
  gulp.watch(paths.coffee, ['coffee']);
  console.log('watching directory:' + paths.coffee.join(', '));

  gulp.watch('./app/*', ['templates']);
  console.log('watching directory: ./app');

});
 
/**
 * tests the testing directory with jasmine.
 */
gulp.task('test', function() {
  gulp.src(paths.test)
    .pipe(plugins.jasmine());
});
   
gulp.task('build', ['clean', 'vendor','less', 'fonts', 'coffee','templates']);
 
gulp.task('default', ['build']);
