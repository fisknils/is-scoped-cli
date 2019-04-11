#!/usr/bin/env node
const isScoped = require('is-scoped');
const fs = require('fs');

fs.readFile('./package.json', {encoding: 'utf-8'}, function(err, raw){
	if(err) {
		console.log('could not find package.json in current directory');
		return;
	}
	let pkg = JSON.parse(raw);
	console.log('package name:',pkg.name);
	console.log('is-scoped:',isScoped(pkg.name));
})
