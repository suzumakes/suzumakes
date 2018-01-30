module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    // Configure tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // concat Bower libraries
        bower_concat: {
            all: {
                dest: 'src/js/_bower.js',    // JS
                cssDest: 'src/scss/_bower.scss',    // CSS
                mainFiles: {
                    bootstrap: [
                        'dist/css/bootstrap.css',
                         'dist/js/bootstrap.js',
                     ],    // for 3.3.6
                    'jquery-ui': [
                        'ui/core.js',
                        'ui/widget.js',
                        'ui/effect.js',
                        'ui/accordion.js',
                        'themes/base/theme.css',
                    ],
                },
                exclude: [],
                include: [],
                dependencies: {},
                bowerOptions: {
                    relative: false
                },
            },
        },

        // compile Sass/SCSS to CSS
        sass: {
            dev: {
                options: {
                    outputStyle: 'expanded',
                    sourceMap: true,
                    outFile: 'css/style.css.map'
                },
                files: { 'css/style.css' : 'src/scss/style.scss' },
            },
        },

        // concat and minify JS
        uglify: {
            dev: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false,
                    preserveComments: 'all'
                },
                files: [{
                    src: [
                        'src/js/*.js',
                        'src/js/config/*.js'
                    ],
                    dest: 'js/script.js'
                }]
            },
            build: {
                files: [{
                    src: [
                        'src/js/*.js',
                        'src/js/config/*.js'
                    ],
                    dest: 'js/script.min.js'
                }]
            },
        },

        // build the site using grunt-includes
        includes: {
            build: {
                cwd: 'src/html/',
                src: ['*.html'],
                dest: '.',
                options: {
                    flatten: true,
                    includePath: 'src/html/include',
                },
            },
        },

        // minify CSS
        cssmin: {
            full: {
                files: [{
                    src: 'css/style.css',
                    dest: 'css/style.min.css'
                }]
            },
        },

        // copy files
        copy: {
            img: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: [
                        './*.{png,jpg}',
                    ],
                    dest: 'img/'
                }],
            },
        },

        // Grunt watch
        watch: {
            js: {
                files: [
                    'src/js/*.js',
                    'src/js/config/*.js'
                ],
                tasks: ['uglify:dev']
            },
            css: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass:dev']
            },
            html: {
                files: ['src/html/**/*.html'],
                tasks: ['includes:build']
            },
        },

    });

    // Register tasks
    grunt.registerTask('default', [
        'sass:dev',
        'includes:build',
    ]);
    grunt.registerTask('build', [
        'bower_concat:all',
        'sass:dev',
        'uglify:dev',
        'uglify:build',
        'includes:build',
        'cssmin:full',
        'copy:img'
    ]);
}    // end exports
