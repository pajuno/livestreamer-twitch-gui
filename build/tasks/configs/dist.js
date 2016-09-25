module.exports = {
	win32archive: {
		platform: "win32",
		tasks: [ "compress:win32" ],
		file: "<%= grunt.config('compress.win32.options.archive') %>"
	},
	win64archive: {
		platform: "win64",
		tasks: [ "compress:win64" ],
		file: "<%= grunt.config('compress.win64.options.archive') %>"
	},

	osx32archive: {
		platform: "osx32",
		tasks: [ "compress:osx32" ],
		file: "<%= grunt.config('compress.osx32.options.archive') %>"
	},
	osx64archive: {
		platform: "osx64",
		tasks: [ "compress:osx64" ],
		file: "<%= grunt.config('compress.osx64.options.archive') %>"
	},

	linux32archive: {
		platform: "linux32",
		tasks: [ "compress:linux32" ],
		file: "<%= grunt.config('compress.linux32.options.archive') %>"
	},
	linux64archive: {
		platform: "linux64",
		tasks: [ "compress:linux64" ],
		file: "<%= grunt.config('compress.linux64.options.archive') %>"
	},

	win32installer: {
		platform: "win32",
		tasks: [
			"clean:package_win32installer",
			"template:win32installer",
			"shell:win32installer"
		],
		file: [
			"dist",
			"<%= grunt.config('template.win32installer.options.data.filename') %>"
		].join( "/" )
	},

	win64installer: {
		platform: "win64",
		tasks: [
			"clean:package_win64installer",
			"template:win64installer",
			"shell:win64installer"
		],
		file: [
			"dist",
			"<%= grunt.config('template.win64installer.options.data.filename') %>"
		].join( "/" )
	},

	linux32deb: {
		platform: "linux32",
		tasks: [ "fpm:deb32" ],
		file: "<%= grunt.config('fpm.deb32.options.p') %>"
	},

	linux64deb: {
		platform: "linux64",
		tasks: [ "fpm:deb64" ],
		file: "<%= grunt.config('fpm.deb64.options.p') %>"
	},

	linux32rpm: {
		platform: "linux32",
		tasks: [ "fpm:rpm32" ],
		file: "<%= grunt.config('fpm.rpm32.options.p') %>"
	},

	linux64rpm: {
		platform: "linux64",
		tasks: [ "fpm:rpm64" ],
		file: "<%= grunt.config('fpm.rpm64.options.p') %>"
	}
};
