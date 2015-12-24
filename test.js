import test from 'ava';
import fn from './';

test(t => {
	let p = fn('http://ragingwind.me/blogs/assets/profile.png');
	console.log(p);
	t.is(p.root, 'ragingwind.me');
	t.is(p.dir, 'blogs/assets');
	t.is(p.base, 'profile.png');
	t.is(p.ext, '.png');
	t.is(p.name, 'profile');

	p = fn('http://ragingwind.me/blogs/assets/');

	t.is(p.root, 'ragingwind.me');
	t.is(p.dir, 'blogs');
	t.is(p.base, 'assets');
	t.is(p.ext, '');
	t.is(p.name, 'assets');

	t.end();
});
