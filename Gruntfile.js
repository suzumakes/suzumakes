// npm install (plugin) --save-dev --> package.json

module.exports = function(grunt) {

    // mozjpeg required for imagemin
    var mozjpeg = require('imagemin-mozjpeg');

    // Configure tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // concat Bower libraries
        bower_concat: {
            all: {
                dest: 'src/js/_bower.js',    // JS
                cssDest: 'src/scss/_bower.scss',    // CSS
                mainFiles: {

                    // required mainFiles entries
                    bootstrap: [
                        'dist/css/bootstrap.css',
                         'dist/js/bootstrap.js',
                     ],    // for 3.3.6
                    'font-awesome': [
                        'css/font-awesome.css',
                        'fonts/*',
                    ],    // for 4.4.0
                    owlcarousel: [
                        'owl-carousel/owl.carousel.js',
                        'owl-carousel/owl.carousel.css',
                        'owl-carousel/owl.transitions.css',
                    ],    // for 1.3.2
                    'jquery-ui': [
                        'ui/core.js',
                        'ui/widget.js',
                        'ui/effect.js',
                        'themes/base/theme.css',
                    ],
                    elastislide: [
                        'js/modernizr.custom.17475.js',
                        'js/jquery.elastislide.js',
                        'js/jquerypp.custom.js',
                        'css/elastislide.css',
                    ],    // for 1.1.0
                    'Slicebox': [
                        'js/jquery.Slicebox.js',
                        'css/Slicebox.css',
                    ],    // for 1.1.0
                    sharrre: [
                        'jquery.sharrre.js',
                    ],
                },
                exclude: [],
                include: [],
                dependencies: {
                    'Elastislide': 'jquery',
                    'Slicebox': 'jquery',
                },
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
                        'src/js/config/*.js',
                    ],
                    dest: 'js/script.js'
                }]
            },
            build: {
                files: [{
                    src: [
                        'src/js/*.js',
                        'src/js/config/*.js',
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
            php: {
                cwd: 'src/php',
                src: ['*.php'],
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

        // imagemin - mozjpeg for jpg
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{ removeViewBox: false }],
                    use: [mozjpeg()]
                },
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: [
                        'foo/*.{png,jpg}',
                    ],
                    dest: 'img/'
                }],
            },
        },

        // copy files
        copy: {
            img: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: [
                        'foo/*.{png,jpg}',
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
                    'src/js/config/*.js',
                ],
                tasks: [ 'uglify:dev' ]
            },
            css: {
                files: [ 'src/scss/**/*.scss' ],
                tasks: [ 'sass:dev' ]
            },
        },

    });

    // Load the plugins
    require('load-grunt-tasks')(grunt);
    // grunt.loadNpmTasks('grunt-bower-concat');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-includes');
    // grunt.loadNpmTasks('grunt-newer');
    // grunt.loadNpmTasks('grunt-sass');
    // grunt.loadNpmTasks('grunt-uncss');
    // grunt.loadNpmTasks('grunt-contrib-clean');

    // Register tasks
    grunt.registerTask('default', [
        'sass:dev',
        'includes:build',
        'includes:php',
    ]);
    grunt.registerTask('build', [
        'bower_concat:all',
        'sass:dev',
        'uglify:dev',
        'uglify:build',
        'includes:build',
        'includes:php',
        'cssmin:full',
        'newer:imagemin:dynamic',
        'newer:copy:img',
    ]);
}    // end exports
