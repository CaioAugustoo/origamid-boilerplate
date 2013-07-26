'use strict';
module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    // watch for changes and trigger compass, jshint, uglify and livereload
    watch: {
      compass: {
        files: ['css/**/*.{scss,sass}'],
        tasks: ['compass']
      },
      js: {
        files: '<%= jshint.all %>',
        tasks: ['jshint', 'uglify']
      },
      livereload: {
        options: { livereload: true },
        files: ['style.css', 'js/*.js', '*.html', '*.php', 'img/**/*.{png,jpg,jpeg,gif,webp,svg}']
      }
    },

    // compass and scss
    compass: {
      dist: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },

    // javascript linting with jshint
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        "force": true
      },
      all: [
      'Gruntfile.js',
      'js/source/main.js'
      ]
    },

    // uglify to concat, minify, and make source maps
    uglify: {
      plugins: {
        options: {
          sourceMap: 'js/map/source-map-plugins.js'
        },
        files: {
          'js/plugins.min.js': [
          'js/source/plugins.js',
          ]
        }
      },
      main: {
        options: {
          sourceMap: 'js/map/source-map-main.js'
        },
        files: {
          'js/main.min.js': [
          'js/source/main.js'
          ]
        }
      }
    },

    // image optimization
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'img/',
          src: '**/*',
          dest: 'img/'
        }]
      }
    },

    // deploy via rsync
    deploy: {
      options: {
        exclude: ['.git*', 'node_modules', '.sass-cache', 'Gruntfile.js', 'package.json', '.DS_Store', 'README.md', 'config.rb', '.jshintrc'],
        recursive: true,
      },
      prod: {
      	options: {
		      src: './',
	        dest: "/home/origamidev/nomedosite.zayph.com/",
	        host: "origamidev@origamid.com",
	        syncDestIgnoreExcl: true
        }
      }
    }

  });

  // rename tasks
  grunt.renameTask('rsync', 'deploy');

  // register task
  grunt.registerTask('default', ['watch']);

};