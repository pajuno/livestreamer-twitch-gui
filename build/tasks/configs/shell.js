var PATH = require( "path" );


module.exports = {
	chocolatey: {
		command: [
			"cd " + PATH.resolve( "build", "package", "chocolatey" ),
			"choco pack -y"
		].join( " && " )
	},

	win32installer: {
		command: "makensis -v3 "
			+ PATH.resolve( "build", "package", "win32installer", "installer.nsi" )
	},

	win64installer: {
		command: "makensis -v3 "
			+ PATH.resolve( "build", "package", "win64installer", "installer.nsi" )
	}
};
