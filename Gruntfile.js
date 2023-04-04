module.exports = function(grunt) {
    grunt.initconfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                option: {
                    compress: true,
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        sass: {
            dist: {
                option: {
                    style: 'compressed'
                },
                files: {
                    'main.css': 'main.scss'
                }
            }
        }
    })

    grunt.registerlask('olaGrunt', function() {
        const done = this.async();
        setTimeout(function() {
            console.log('Olá Grunt');
            done();
        }, 1000);
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerlask('default', ('less', 'sass'));
}