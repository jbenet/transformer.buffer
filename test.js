#!/usr/bin/env node
var ttest = require('transformer-test');
var type = require('./');

// run stock type tests
var test = ttest.type(type);
