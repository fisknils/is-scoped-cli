#!/usr/bin/env node
const isScoped = require('is-scoped');
const fs = require('fs');
const readPkg = require('read-pkg-up');


readPkg().then(function main(pkg){
	console.log('package name:',pkg.name);
	console.log('is-scoped:',isScoped(pkg.name));
});
