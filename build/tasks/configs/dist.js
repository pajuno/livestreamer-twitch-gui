module.exports = {
	win32archive: {
		platform: "win32",
		tasks: [ "compress:win32" ],
		file: "<%= compress.win32.options.archive %>"
	},
	win64archive: {
		platform: "win64",
		tasks: [ "compress:win64" ],
		file: "<%= compress.win64.options.archive %>"
	},

	osx32archive: {
		platform: "osx32",
		tasks: [ "compress:osx32" ],
		file: "<%= compress.osx32.options.archive %>"
	},
	osx64archive: {
		platform: "osx64",
		tasks: [ "compress:osx64" ],
		file: "<%= compress.osx64.options.archive %>"
	},

	linux32archive: {
		platform: "linux32",
		tasks: [ "compress:linux32" ],
		file: "<%= compress.linux32.options.archive %>"
	},
	linux64archive: {
		platform: "linux64",
		tasks: [ "compress:linux64" ],
		file: "<%= compress.linux64.options.archive %>"
	},

	win32installer: {
		platform: "win32",
		tasks: [
			"clean:package_win32installer",
			"template:win32installer",
			"shell:win32installer"
		],
		file: "<%= dir.dist %>/<%= template.win32installer.options.data.filename %>"
	},

	win64installer: {
		platform: "win64",
		tasks: [
			"clean:package_win64installer",
			"template:win64installer",
			"shell:win64installer"
		],
		file: "<%= dir.dist %>/<%= template.win64installer.options.data.filename %>"
	},

	linux32deb: {
		platform: "linux32",
		tasks: [ "fpm:deb32" ],
		file: "<%= fpm.deb32.options.p %>"
	},

	linux64deb: {
		platform: "linux64",
		tasks: [ "fpm:deb64" ],
		file: "<%= fpm.deb64.options.p %>"
	},

	linux32rpm: {
		platform: "linux32",
		tasks: [ "fpm:rpm32" ],
		file: "<%= fpm.rpm32.options.p %>"
	},

	linux64rpm: {
		platform: "linux64",
		tasks: [ "fpm:rpm64" ],
		file: "<%= fpm.rpm64.options.p %>"
	}
};
