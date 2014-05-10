#!/usr/bin/env node
var transformer = require('dat-transformer');
var type = require('./');

// run stock type tests
var test = transformer.test.type(type);
