module.exports = function(grunt) {
  grunt.initConfig({
    gyp: {
      arm: {
        command: 'rebuild',
        options: {
          arch: 'arm'
        }
      },
      ia32: {
        command: 'rebuild',
        options: {
          arch: 'ia32'
        }
      },
      x64: {
        command: 'rebuild',
        options: {
          arch: 'x64'
        }
      }
    },
    "nw-gyp": {
      arm: {
        command: 'rebuild',
        options: {
          arch: 'arm'
        }
      },
      ia32: {
        command: 'rebuild',
        options: {
          arch: 'ia32'
        }
      },
      x64: {
        command: 'rebuild',
        options: {
          arch: 'x64'
        }
      }
    },
    copy: {
      arm: {
        files: [{
          src: 'build/Release/node_printer.node',
          dest: 'lib/node_printer_' + process.platform + '_arm.node'
        }]
      },
      ia32: {
        files: [{
          src: 'build/Release/node_printer.node',
          dest: 'lib/node_printer_' + process.platform + '_ia32.node'
        }]
      },
      x64: {
        files: [{
          src: 'build/Release/node_printer.node',
          dest: 'lib/node_printer_' + process.platform + '_x64.node'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-node-gyp');
  grunt.loadNpmTasks('grunt-nw-gyp');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build-nw-arm', [
    'nw-gyp:arm',
    'copy:arm'
  ]);

  grunt.registerTask('build-nw-ia32', [
    'nw-gyp:ia32',
    'copy:ia32'
  ]);

  grunt.registerTask('build-arm', [
    'gyp:arm',
    'copy:arm'
  ]);

  grunt.registerTask('build-ia32', [
    'gyp:ia32',
    'copy:ia32'
  ]);

  grunt.registerTask('build-x64', [
    'gyp:x64',
    'copy:x64'
  ]);

  grunt.registerTask('build-nw-x64', [
    'nw-gyp:x64',
    'copy:x64'
  ]);

  grunt.registerTask('build', [
    'build-arm',
    'build-ia32',
    'build-x64'
  ]);

  grunt.registerTask('build-nw', [
    'build-nw-arm',
    'build-nw-ia32',
    'build-nw-x64'
  ]);
}
