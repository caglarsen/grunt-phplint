module.exports = function(grunt) {
	var cfg = {
		
		phplint: {
			options: {
			    phpArgs: {
				
				"-l": null,
				"--define": "short_open_tag=Off"
			    },
			    
			},
			good: ["test/rsrc/*-good.php"],
			good_nocache: {
				options: {
					cache: false
				},
				files: {
					src: ["test/rsrc/*-good.php"]
				}
			},
			bad: ["test/rsrc/*-fail.php"],

			explicit: {
				options: {
					phpCmd: "/usr/bin/php"
				},

				src: ["test/rsrc/*-good.php"]
			}
		}
	};

	grunt.initConfig(cfg);

	
	grunt.loadTasks("./tasks");

	grunt.registerTask("default", ["phplint:good", "phplint:good_nocache"]);
};
