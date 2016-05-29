module.exports = {
	options: {
		s: "dir",
		force: true,

		version: "<%= package.version %>",
		iteration: process.env.PACKAGE_ITERATION || "1",
		name: "<%= package.name %>",
		description: [
			"A graphical user interface on top of the Livestreamer command line interface.",
			"Browse Twitch.tv and watch streams in your videoplayer of choice."
		].join( "\n" ),
		url: "<%= package.homepage %>",
		license: "<%= package.license %>",
		maintainer: [
			process.env.PACKAGE_MAINTAINER_NAME,
			"<" + process.env.PACKAGE_MAINTAINER_EMAIL + ">"
		].join( " " ),
		vendor: "",

		prefix: "/opt/<%= fpm.options.name %>",
		"template-scripts": true
	},

	deb32: {
		options: {
			t: "deb",
			a: "i386",
			C: "<%= nwjs.options.buildDir %>/<%= package.name %>/linux32",
			p: [
				"dist/",
				"<%= package.name %>",
				"_<%= package.version %>",
				"-<%= fpm.options.iteration %>",
				"_<%= fpm.deb32.options.a %>",
				".<%= fpm.deb32.options.t %>"
			].join( "" ),

			depends: [
				"livestreamer (>= 1.12.2)",
				"xdg-utils",
				"x11-utils"
			],

			"template-value": {
				"prefix": "<%= fpm.options.prefix %>",
				"exec": "<%= package.name %>"
			},
			"after-install": "build/resources/package/deb/postinst",
			"before-remove": "build/resources/package/deb/prerm",
			"after-remove": "build/resources/package/deb/postrm",

			/*
			// does not work: lintian is complaining. may be a bug in fpm v1.6.0
			"deb-meta-file": [
				"build/resources/package/deb/copyright"
			],
			*/

			"deb-compression": "xz",
			"deb-no-default-config-files": true
		}
	},

	deb64: {
		options: {
			t: "deb",
			a: "amd64",
			C: "<%= nwjs.options.buildDir %>/<%= package.name %>/linux64",
			p: [
				"dist/",
				"<%= package.name %>",
				"_<%= package.version %>",
				"-<%= fpm.options.iteration %>",
				"_<%= fpm.deb64.options.a %>",
				".<%= fpm.deb64.options.t %>"
			].join( "" ),

			depends: [
				"livestreamer (>= 1.12.2)",
				"xdg-utils",
				"x11-utils"
			],

			"template-value": {
				"prefix": "<%= fpm.options.prefix %>",
				"exec": "<%= package.name %>"
			},
			"after-install": "build/resources/package/deb/postinst",
			"before-remove": "build/resources/package/deb/prerm",
			"after-remove": "build/resources/package/deb/postrm",

			/*
			// does not work: lintian is complaining. may be a bug in fpm v1.6.0
			"deb-meta-file": [
				"build/resources/package/deb/copyright"
			],
			*/

			"deb-compression": "xz",
			"deb-no-default-config-files": true
		}
	},

	rpm32: {
		options: {
			t: "rpm",
			a: "i386",
			C: "<%= nwjs.options.buildDir %>/<%= package.name %>/linux32",
			p: [
				"dist/",
				"<%= package.name %>",
				"-<%= package.version %>",
				"-<%= fpm.options.iteration %>",
				".<%= fpm.rpm32.options.a %>",
				".<%= fpm.rpm32.options.t %>"
			].join( "" ),

			depends: [
				"livestreamer >= 1.12.2",
				"xdg-utils",
				"xorg-x11-utils"
			],

			"template-value": {
				"prefix": "<%= fpm.options.prefix %>",
				"exec": "<%= package.name %>"
			},
			"after-install": "build/resources/package/rpm/postinst",
			"before-remove": "build/resources/package/rpm/prerm",

			"rpm-compression": "xz"
		}
	},

	rpm64: {
		options: {
			t: "rpm",
			a: "x86_64",
			C: "<%= nwjs.options.buildDir %>/<%= package.name %>/linux64",
			p: [
				"dist/",
				"<%= package.name %>",
				"-<%= package.version %>",
				"-<%= fpm.options.iteration %>",
				".<%= fpm.rpm64.options.a %>",
				".<%= fpm.rpm64.options.t %>"
			].join( "" ),

			depends: [
				"livestreamer >= 1.12.2",
				"xdg-utils",
				"xorg-x11-utils"
			],

			"template-value": {
				"prefix": "<%= fpm.options.prefix %>",
				"exec": "<%= package.name %>"
			},
			"after-install": "build/resources/package/rpm/postinst",
			"before-remove": "build/resources/package/rpm/prerm",

			"rpm-compression": "xz"
		}
	}
};
