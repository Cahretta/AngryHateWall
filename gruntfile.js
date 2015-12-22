module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        browserify: {
            dist: {
                files: {
                    'public/bundle.js': ['source/**/*.jsx', 'source/**/*.js']
                },
                options: {
                    transform: ["babelify"]
                }
            }
        }

    });
    
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ["browserify"]);
}
