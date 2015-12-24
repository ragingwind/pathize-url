'use strict';

const url = require('url');
const path = require('path');

module.exports = function (u) {
	const p = url.parse(u);

	if (!p) {
		return null;
	}

	p.pathname = p.pathname.replace('/', path.sep).replace(new RegExp('^' + path.sep), '');

	return {
		root: p.host,
		dir: path.dirname(p.pathname),
		base: path.basename(p.pathname),
		name: path.basename(p.pathname).replace(path.extname(p.pathname), ''),
		ext: path.extname(p.pathname),
		paths: p.pathname.split(path.sep),
		url: p
	};
};
