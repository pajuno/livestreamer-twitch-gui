module.exports = {
	options: {
		algorithm: "sha256",
		encoding: "hex",
		dest: "dist/<%= package.name %>-v<%= package.version %>-checksums.txt"
	}
};
