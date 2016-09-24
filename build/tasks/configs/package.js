var PATH = require( "path" );


module.exports = {
	options: {
		changelogFile: PATH.resolve( "CHANGELOG.md" ),
		// has a rate limit of 60 requests per IP per hour
		githubReleases: "https://api.github.com/repos/bastimeyer/livestreamer-twitch-gui/releases",
		githubReleasesAtom: "https://github.com/bastimeyer/livestreamer-twitch-gui/releases.atom"
	},

	chocolatey: {
		options: {
			changelog: true,
			checksums: true
		},
		tasks: [
			"clean:package_chocolatey",
			"template:chocolatey",
			"shell:chocolatey"
		]
	},

	win32installer: {
		tasks: [
			"clean:package_win32installer",
			"template:win32installer",
			"shell:win32installer"
		]
	},

	win64installer: {
		tasks: [
			"clean:package_win64installer",
			"template:win64installer",
			"shell:win64installer"
		]
	},

	deb32: {
		tasks: [
			"fpm:deb32"
		]
	},

	deb64: {
		tasks: [
			"fpm:deb64"
		]
	},

	rpm32: {
		tasks: [
			"fpm:rpm32"
		]
	},

	rpm64: {
		tasks: [
			"fpm:rpm64"
		]
	}
};
