module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);
grunt.initConfig({
compress: {
main: {
options: {
archive: 'wiremock.zip',
pretty: true
},
expand: true,
cwd: './',
src: ['wiremock-standalone-2.12.0.jar','./manifest.json'],
dest: './'
}
}
});
grunt.registerTask('default', ['compress']);
};