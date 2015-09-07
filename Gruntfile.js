// module.exports = function(grunt){
// 	grunt.initConfig({
// 		uglify:{
// 			build:{
// 				src:['assets/js/sortable.js','app/app.module.js','app/app.route.js','app/controllers/addCategory.js','app/directives/category.js'],
// 				dest:'minifiedJS.js'
// 			}
// 		},
// 		copy :{
// 			main : {
// 				src: 'node_modules',
// 				dest: 'assets/',
// 			}
// 		},
// 		cssmin : {
// 			target : {
// 				files: [{
// 					src : ['assets/css/style.css'],
// 					dest : 'assets/minified',
// 					ext : '.min.css'
// 				}]
// 			}
// 		},
// 		'gh-pages': {
// 			options: {
// 				base: 'build'
// 			},
// 			src: ['**/*']
//   		},
// 		compress: {
// 			main: {
// 				options: {
// 				mode: 'gzip'
// 			},
// 			files: [
// 				// Each of the files in the src/ folder will be output to 
// 				// the dist/ folder each with the extension .gz.js 
// 				{expand: true, src: ['js/*.js'], dest: 'minified/', ext: '.gz.js'}
// 				]
// 			}
// 		},
// 		htmlhint: {
// 			html: {
// 				options: {
// 					'tag-pair': true
// 				},
// 				src: ['index.html']
// 			}
// 		},
// 		remove: {
// 			options: {
// 				trace: true
// 			},
// 			fileList: ['assets/fonts/fontello/fontello.svg']
// 			// dirList: ['assets/node_modules']
// 		}

// 	})

// 	// Load the plugin that provides the "uglify" task.
//   	grunt.loadNpmTasks('grunt-contrib-uglify');

//   	// grunt.loadNpmTasks('grunt-contrib-jshint');

//   	grunt.loadNpmTasks('grunt-contrib-copy');
  	
//   	grunt.loadNpmTasks('grunt-contrib-compress');

//   	grunt.loadNpmTasks('grunt-contrib-cssmin');
//   	grunt.loadNpmTasks('grunt-remove');

//   	grunt.loadNpmTasks('grunt-gh-pages');

//   	grunt.loadNpmTasks('grunt-htmlhint');

// 	// Default task(s).
//   	grunt.registerTask('default', ['uglify','copy','cssmin','gh-pages','htmlhint','remove']);
// }
module.exports = function(grunt){
	grunt.initConfig({
		uglify : {
			build : {
				src : ['assets/js/**/*.js'],
				dest : 'assets/grunt/js/plugins.min.js'
			}
		},
		cssmin : {
			target : {
				files : [{
					src : 'assets/css/**/*.css',
					dest : 'assets/grunt/css/cssplugins.min.css'
				}]
			}
		},
		copy :{
			main : {
				cwd : 'app',
				src: '**/*',
				dest: 'assets/grunt/copiedfiles/',
				expand : true
			}
		},
		compress : {
			main : {
				options : {
					archive : 'assets/grunt/angulardemo.zip',
				},
				files : [{
					expand: true,
        			cwd: 'app/',
        			src: ['**/*'],
        			dest: 'app'
        			},
        			{
        			expand: true,
        			cwd: 'assets/',
        			src: ['**/*'],
        			dest: 'assets'
        			},
        			{
        			expand: true,
        			cwd: 'node_modules/',
        			src: ['**/*'],
        			dest: 'node_modules'
				}]
			}
		},
		purifycss : {
			options : {

			},
			target : {
				src : ['index.html','app/views/*.html'],
				css : ['assets/css/*.css'],
				dest : 'assets/grunt/purified.css'
			}
		},
		watch : {
			scripts : {
				files : ['assets/js/**/*.js','assets/css/**/*.css'],
				tasks : ['uglify','cssmin']
			}
		}
	})

	//load grunt plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-purifycss');

	grunt.registerTask('default', ['uglify','cssmin','watch','copy','compress','purifycss']);
	//custom tasks
	grunt.registerTask('sayhello', 'says hello' , function(){
		console.log("hello this is custom task");
	});
}