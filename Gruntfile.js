module.exports = function (grunt) {
	var config = {
		pkg: grunt.file.readJSON('component.json'),
		
		watch: {
  		files: 'src/*',
  	  tasks: ['compass', 'copy']
  	},

		copy: {
    	dist: {
      	files: [
					{expand: true, cwd: 'src/scss', src: ['**'], dest: 'dist/scss'},
					{expand: true, cwd: 'src/img/grunt_compass_test_fui', src: ['**'], dest: 'dist/img'}
				]
      }
    },
		bower: {
			install: {
				options: {
					targetDir: 'src/vendor/',
					cleanup: true
				}
			}
		},
		
		compass: {                  // Task
		    dist: {                   // Target
		      options: {              // Target options
		        relativeAssets: true,
						sassDir: 'src',
						cssDir: 'example',
		        environment: 'production',
						outputStyle: 'expanded',
						imagesDir: 'dist/img'
						
		      }
		    }
		}
		
  }

	grunt.initConfig(config);
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('install', ['bower']);
  grunt.registerTask('build', 'compass');
	grunt.registerTask('build', 'copy');

};
