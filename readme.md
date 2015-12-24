# pathize-url [![Build Status](https://travis-ci.org/ragingwind/pathize-url.svg?branch=master)](https://travis-ci.org/ragingwind/pathize-url)

> Parse URL and return it as result of path.parse


## Install

```
$ npm install --save pathize-url
```


## Usage

```js
const pathizeUrl = require('pathize-url');

pathizeUrl('http://ragingwind.me/blogs/assets/profile.png');
//=>
{
	root: 'ragingwind.me',	// host, hostname
	dir: '/blogs/assets',		// dir name of pathname
	base: 'profile.png',		// the last of the path
	ext: '.png',						// ext of the last of the path
	name: 'profile',				// the name of the last of the path
	url: [Object]						// parsed object from url.parse
}
```


## API

### pathizeUrl(url)

#### input

Type: `string`

URL to parse.

## License

MIT © [ragingwind](http://ragingwind.me)
