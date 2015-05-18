module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2,
          sourceMap: false
        },
        files: {
          "assets/css/style.css": "assets/less/style.less",
          "assets/css/header.css": "assets/less/typography.less",
          "assets/css/header.css": "assets/less/ui.less",
          "assets/css/header.css": "assets/less/navigation.less",
          "assets/css/header.css": "assets/less/header.less"
        }
      }
    },
    haml: {
      dist: {
        files: {
          'index.html': 'index.haml'
        }
      }
    },
    watch: {
      styles: {
        files: ['assets/less/*.less', '*.haml'],
        tasks: ['less', 'haml'],
        options: {
          nospawn: true,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-haml');

  grunt.registerTask('default', ['less', 'haml', 'watch']);
};