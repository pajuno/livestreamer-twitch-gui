module.exports = {
	"chocolatey" : {
		"options" : {
			"data" : {
				"author": "<%= package.author %>",
				"checksum": "<%= package.checksums.win32.hash %>",
				"checksum64": "<%= package.checksums.win64.hash %>",
				"homepage": "<%= package.homepage %>",
				"name": "<%= package.name %>",
				"changelog": "<%= package.changelogEscaped %>",
				"version": "<%= package.version %>"
			}
		},
		"files": {
			"build/package/chocolatey/livestreamer-twitch-gui.nuspec":
				"build/resources/package/chocolatey/livestreamer-twitch-gui.nuspec.tpl",
			"build/package/chocolatey/tools/chocolateyinstall.ps1":
				"build/resources/package/chocolatey/tools/chocolateyinstall.ps1.tpl",
			"build/package/chocolatey/tools/chocolateyuninstall.ps1":
				"build/resources/package/chocolatey/tools/chocolateyuninstall.ps1.tpl"
		}
	},

	"win32installer": {
		"options": {
			"data": {
				"dirroot"    : "<%= dir.root %>",
				"dirinput"   : "<%= dir.releases %>/<%= package.name %>/win32",
				"diroutput"  : "<%= dir.dist %>",
				"filename"   : "<%= package.name %>-v<%= package.version %>-win32-installer.exe",
				"name"       : "<%= package.name %>",
				"displayname": "<%= main['display-name'] %>",
				"version"    : "<%= package.version %>",
				"author"     : "<%= package.author %>",
				"homepage"   : "<%= package.homepage %>",
				"arch"       : "win32"
			}
		},
		"files": {
			"build/package/win32installer/installer.nsi":
				"build/resources/package/wininstaller/installer.nsi.tpl"
		}
	},

	"win64installer": {
		"options": {
			"data": {
				"dirroot"    : "<%= dir.root %>",
				"dirinput"   : "<%= dir.releases %>/<%= package.name %>/win64",
				"diroutput"  : "<%= dir.dist %>",
				"filename"   : "<%= package.name %>-v<%= package.version %>-win64-installer.exe",
				"name"       : "<%= package.name %>",
				"displayname": "<%= main['display-name'] %>",
				"version"    : "<%= package.version %>",
				"author"     : "<%= package.author %>",
				"homepage"   : "<%= package.homepage %>",
				"arch"       : "win64"
			}
		},
		"files": {
			"build/package/win64installer/installer.nsi":
				"build/resources/package/wininstaller/installer.nsi.tpl"
		}
	}
};
