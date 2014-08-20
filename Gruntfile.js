'use strict';
module.exports = function(grunt) {

// LOAD GRUNT TASKS
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

// BEGIN OF GRUNT CONFIG
grunt.initConfig({

// WATCH FOR CHANGES
watch: {

	sass: {
		files: ['css/**/*.{scss}'],
		tasks: ['sass']
	},

	uglify: {
		files: ['js/**/*.{js}'],
		tasks: ['uglify']
	},

	livereload: {
		options: {
			livereload: true
    },
    files: [
			'style.css',
			'js/*.js',
			'*.html',
			'*.php',
			'img/**/*.{png,jpg,jpeg,gif,webp,svg}'
		]
	},

},

// SASS
sass: {
	dist: {
		options: {
			outputStyle: "compressed",
			includePaths: require('node-bourbon').includePaths
		},
		files: {
			'style.css': 'css/style.scss'
		}
	}
},

// UGLIFY
uglify: {
  plugins: {
    files: {
      'js/plugins.min.js': 'js/plugins/*.js'
    }
  },
  main: {
    files: {
      'js/main.min.js': 'js/main/*.js'
    }
  }
},

// IMAGE OPT
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

// DEPLOY VIA RSYNC
deploy: {
	options: {
		exclude: [
			'.git*',
			'node_modules',
			'.sass-cache',
			'Gruntfile.js',
			'package.json',
			'.DS_Store',
			'README.md',
			'config.rb',
			'.jshintrc',
			'*.sublime-workspace',
			'*.sublime-project'
		],
		recursive: true,
	},
	prod: {
		options: {
			src: './',
			dest: "/home/origamidev/DOMINIO/",
			// WP dest: "/home/origamidev/DOMINIO/wp-content/themes/TEMA/",
			host: "origamidev@origamid.com",
			syncDestIgnoreExcl: true
    }
  }
}

}); // END OF GRUNT CONFIG

// RENAME RSYNC
grunt.renameTask('rsync', 'deploy');

// MAIN TASK
grunt.registerTask('default', ['watch']);

};