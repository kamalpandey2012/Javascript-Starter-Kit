// this file will not be transpiled so use common js module pattern
require('babel-register')();

//disable webpack features that mocha doesn't understand
require.extensions['.css']= function(){};

