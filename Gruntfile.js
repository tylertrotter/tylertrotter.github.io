module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['sass']);
};