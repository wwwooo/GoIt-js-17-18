module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            css: {
                src: ['css/src/*.css'],
                dest: 'css/dist/style.css'
            },
            js: {
                src: ['js/src/*.js'],
                dest: 'js/dist/main.js',
                options: {
                  separator: ';'
                }
            }
        },
        uglify: {
            js: {
                src: ['js/dist/main.js'],
                dest: 'js/dist/main.min.js'
            }
        },
        cssmin: {
            css: {
                src: ['css/dist/style.css'],
                dest: 'css/dist/style.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
