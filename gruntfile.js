module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      build: {
        options: {
          outputStyle: 'expanded',
          require: 'susy'
        },
        files: {
          'assets/css/video-player.css' : 'assets/scss/video-player.scss'
        }
      }
    },

    // Autoprefixer
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'last 4 iOS versions', 'last 4 Android versions', 'ie 9', 'ie 10']
      },

      dist: {
        files: {
          'assets/css/video-player.css' : 'assets/css/video-player.css'
        }
      }
    },

    //Connect server for running the pattern library
    connect: {
      server: {
        options: {
          hostname: '0.0.0.0',
          port: 8888
          // base: 'build',
          // livereload: true
        }
      }
    },

    //Watch task with livereload
    watch: {
      styles: {
        files: 'assets/scss/**/*.scss',
        tasks: ['sass:build', 'autoprefixer']
      }
    }
  });

  //Load SASS task
  grunt.loadNpmTasks('grunt-sass');

  // Autoprefixer
  grunt.loadNpmTasks('grunt-autoprefixer');

  //Watch task
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Local server
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', [
    'sass:build',
    'autoprefixer',
    'connect:server',
    'watch'
  ]);
};
