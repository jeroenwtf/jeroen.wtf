module.exports = function(grunt) {

	grunt.initConfig({
		uglify: {
			javascript: {
				files: {
					'public/js/scripts.min.js': [
            'assets/bower_components/jquery/dist/jquery.min.js',
						'assets/js/*.js',
					]
				}
			}
		},
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'public/css/styles.min.css': [
            'assets/css/normalize.css',
            'assets/bower_components/bootstrap/dist/css/bootstrap.min.css',
            'assets/css/styles.css'
          ]
        }
      }
    },
		watch: {
			scripts: {
				files: ['assets/**/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false,
				},
			},
      styles: {
        files: ['assets/**/*.css'],
        tasks: ['cssmin'],
        options: {
          spawn: false,
        },
      },
      pages: {
        files: ['index.html'],
        tasks: ['processhtml']
      }
		},
    processhtml: {
      options: {
        data: {
          message: 'Hello world!'
        }
      },
      dist: {
        files: {
          'public/index.html': ['index.html']
        }
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/assets/images/'
        }]
      },
    }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('js', ['uglify']);
  grunt.registerTask('generate', ['processhtml', 'cssmin']);

}
