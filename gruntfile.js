module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            css: {
                files: {
                    'css/dist/style.css': ['css/src/*.css']
                }
            },
            js: {
                files: {
                    'js/dist/main.js': ['js/src/*.js']
                },
                options: {
                    separator: '\n;'
                }
            }
        },
        uglify: {
            js: {
                files: {
                    'js/dist/main.min.js': ['js/dist/main.js']
                }
            }
        },
        cssmin: {
            css: {
                files: {
                    'css/dist/style.min.css': ['css/dist/style.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
