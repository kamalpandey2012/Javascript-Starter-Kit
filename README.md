# FSDS-3 Javascript Development Environment For Konfinity
## 3.1 Why we need a starter kit
1. Codifies
    - Decisions
    - Best Practices
    - Lesson's learned
2. Encourages consistency
3. Avoids forgetting important details
4. Increases Quality
5. Avoid repeating work

A starter kit a living, automated and interactive checklist. Developers know what to do but it's easier to overlook step
## 3.2 What belongs in the starter kit
- package management
- Bundling
- Minification
- SourceMaps
- Transpiling
- Dynamic HTML generation
- Centralised HTTP
- Mock API Framework
- Component Libraries
- Development Webserver
- Linting
- Automated Testing
- Continuous Integration
- Automated Build
- Automated Deployment
- Working Example app

## 3.3 What to look for in an Editor
1. Strong ES2015+ Support
    - Autocompletion
    - Parse ES6 imports
    - Report unused imports
    - Automated refractoring
2. Framework intellisense
3. Build in terminal (to avoid switching back and forth)

Note: some editors provide support for build in terminal via plugins

Some of recommended editors
1. Atom
2. Webstorme (Not Free)
3. Brackets
4. VScode

### 3.3.1 EditorConfig for better consistency (.editorconfig)
No need for whole organization to have same editor. One can achieve better consistency by using .editorconfig file in root of your project and commiting it to git so that all team members could use same kind of editor styles
check editorconfig.org This website provides basic editorconfig file for major editors. Some of them needs plugins to enable this file.

## 3.4 Javascript Package managers
### 3.4.1 Some popular ones
1. **Bower** - Initially it dubbed itself as package manager for web but today largely people moved away from bower to npm. It became popular by supporting entire libraries and frameworks in a format that didn't require a build step but today's almost everyone has a build step in their project so this big advantage became a huge bottleneck
2. **npm** - It has almost every library for frontend as well as backend along with a strong support for scripting.
3. **jspm** - Not a very popular but interesting option that helps build your package from its own repository of packages as well as other locations such as git and npm repos. In front of powerful bundlers of npm it's too early to start in production with jspm

### 3.4.2 Working with npm
1. Install node
2. Rum command `npm init` and check all options by editing or just using return key
3. Install the following package
`babel-cli babel-core babel-loader babel-preset-latest babel-register chai chalk cheerio cross-env eslint eslint-plugin-import eslint-watch express html-webpack-plugin jsdom localtunnel mocha nock npm-run-all nsp numeral open rimraf webpack webpack-dev-middleware webpack-hot-middleware webpack-md5-hash css-loader style-loader` by running command
 ```
 npm install --save-dev package names
 ```
## 3.5 Package Security
It is very easy to note that anyone could publish packages in npm repository so to have a security barrier is of prime importance. Many packages to work for this problem like retire.js or node security platform

To check for vulnerabilities in our installed packages run the following command
1. first install it globally by running command
```
npm install -g nsp
```
2. Run for security check
```
nsp check
```

## 3.6 Development web server
### Tasks
1. Review Development webserver options
2. Configure a development webserver
3. Services for sharing your work

### 3.6.1 Some Options
1. **http-server**
    - ultra simple
    - Simple command servers current directory
2. **live-server**
    - light-weight
    - support live reloading
3. **express**
    - Comprehensive
    - Highly configurable
    - Production grade
    - Can run it everywhere
4. **budo**
    - Integrates with browserify
    - Includes **hot-reloading**
5. **webpack-dev-server**
    - Build in webpack
    - Serves from memory
    - Includes hot-reloading
6. **browser-sync**
    - Dedicated ip for sharing work in lan
    - All interactions remain in sync across different devices
    - Great for cross-device testing
    - Integrates with webpack, express

Out of this pool of dev-Servers we will be pulling express

### 3.6.2 Integrate Express
1. Start by creating a folder buildScripts folder in the root then inside that create a file srcServer.js
2. In that srcServer.js file add express code that we will discuss in separate express course. Link will be uploaded here only when course is ready
```
var express = require('express');
var path = require('path');
var open = require('open');

var port = 5001;
var app = express();

app.get('/', function(req, res){
res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
    if(err){
console.log(err);
    }
else{
open('http://localhost:'+port);
}
});
```
3. Create a folder src in project root, inside that folder create a file index.html with content given below
```
<!DOCTYPE html>
<html>

<head>
    <title>Starter Application</title>
    <meta charset="utf-8">
    <meta name="keywords" content="javascript, good practices, starter kit, from testing to deployment">
</head>

<body>
    <h1>Starter Kit</h1>
</body>

</html>
```
4. Run the server by typing following command in terminal
```
node buildScripts/srcServer.js
```
This should open the webpage in the browser with h1 tag

### 3.6.3 Sharing work in progress
One option is to deploy directly to AWS or any other hosting service but that consume time and money so it they both are important to you keep reading

#### 3.6.3.1 Options for sharing
1. **localtunnel**
    - Easily share work on your local machine
    - Ultra-versatile
    - setup
        - `npm install localtunnel -g`
        - start your app then `lt --port 5001`
2. **ngrok**
    - secure tunnel to your local machine
    - setup
        - signup
        - install ngrok
        - install authtoken
        - start your app
        - ../ngrok http 80
3. **Now**
    - Quickly deploy nodejs to the cloud
    - no firewall hole
    - hosting persists
    - setup
        - `npm install -g now`
        - create start script
        - now
4. **surge**
    - Quickly host static files to server
    - no firewall hole
    - hosting persists
    - setup
        - `npm install -g surge`
        - surge

We'll recommend **localtunnel**

## 3.7 Automation
### 3.7.1 Options
1. **Grunt**
    - The original
    - configuration over code
    - Writes intermediatery files between steps
    - large plugin ecosystem
2. **Gulp**
    - In-memory streams
    - fast
    - code over configuration
    - Large plugin ecosystem
3. **npm scripts**
    - Declared in package.json
    - leverage your os command line
    - directly use npm packages
    - call separate node scripts
    - convention based pre/post hooks
    - leverage world's largest package manager

### 3.7.2 Why npm scripts
   - Use tools directly
   - no need for separate plugin
   - simpler debugging
   - better docs
   - easy to learn
   - simple

### 3.7.3 npm scripts
1. find key "scripts" inside package.json file and add start script by pasting the following code inside the "scripts" tag in package.json file
```
"start":"node buildScripts/srcServer.js"
```
2. Now run server by typing the following command in the terminal
```
npm start
```
**Note**: start and test scripts are special scripts that could be directly called otherwise the general method for running scripts is `npm run scriptName`

### 3.7.4 adding pre/post hook to start script
1. start by creating a file inside buildScripts folder named startMessage.js, as name signifies it will create a message before running of start script. The contents of that file are as follows
```
var chalk = require('chalk');
console.log(chalk.green('starting app in dev mode ...));
```
2. Add following code after start script code you pasted earlies (don't forget to add 'comma' after start script).
```
"prestart":"node buildScripts/startMessage.js"
```
### 3.7.5 Creating security check and share script
```
"security-check": "nsp check",
"share":"lt --port 5001"
```
### 3.7.6 running concurrent tasks
1. Modify the start script to run more than one script in parallel
```
"start":"npm-run-all --parallel security-check open:src",
"open:src":"node buildScripts/srcServer.js"
```
2. Change the share script to run the local server and localtunnel simultaneouly
```
"localtunnel":"lt --port 5001",
"share":"npm-run-all --parallel open:src localtunnel"
```
**Note**: Other than start and test script use following command in terminal
```
npm run scriptName
```
for example to run share script use
```
npm run share
```
## 3.8 Transpiling
Previously JS didn't get any update for almost a decade but in recent time it has been committed to get an update every year so you could expect to see a greater trend in transpilers as browsers need some time to test and deploy new features of JS

1999 - 2009 -> ES3 - ES5

2009 - 2015 -> ES5 - ES6

2015 - 2016 -> ES6 - ES7

### 3.8.1 Popular Transpilers
1. **Babel**
    - Write standarized JS
    - Leverage Full JS ecosystem
    - Use experimental features earlier
    - No type definitions or annotations required
    - ES6 imports are statically analyzable
2. **TypeScript**
    - Superset of JS
    - Enhanced Readability
    - Enhanced Autocompletion (due to type safety)
    - Safer refactoring
    - Additional non-standard features
3. **Elm**
    - Compiles down to JS
    - Clean syntax
    - Immutable data structures
    - Friendly errors
    - All errors are compile time errors

We will recommend babel because of standard js support.

### 3.8.2 Why transpile
1. ES5
    - No waiting for transpiler
    - No transpiler dependency
2. Transpiled
    - Can use the latest features
    - can eventually remove transpiler
    - The Switch between upper versions becomes less painful.

### 3.8.3 Setting up babel
1. Create .babelrc file into the project root in it paste the following content that tells babel to use latest preset
```
{
    "presets": [
        "latest"
    ]
}
```
2. Change the file startMessage.js to es6 code ie. change in the import statement
```
import chalk from 'chalk';
console.log(chalk.green('Starting app in dev mode ...'));
```
3. Now change the prestart script in package.json file with
```
"prestart":"babel-node buildScripts/startMessage.js"
```
4. Now run the start script and check wheter the green color message is visible in terminal.
5. Change the srcServer.js file to support ES6
```
import express from 'express';
import path from 'path';
import open from 'open';

const port = 5001;
const app = express();

app.get('/', function(req, res){
res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
    if(err){
console.log(err);
    }
else{
open('http://localhost:'+port);
}
});
```
6. Add babel-node to the open:src script (refer step 3)

## 3.9 Module Formats
### 3.9.1 -  5 module patterns
1. IIFE
2. Asynchronous Module Definition (AMD)
3. Common JS
4. Universal Module Definition (UMD)
5. ES6 Module pattern

examples of each module definition
1. Global
```
//Global
myGlobal;
```
2. IIFE
```
(function(){
    //my code here
})();
```
3. AMD
```
define(['jq'], function(jq){
});
```
4. Common JS
```
var jquery = require('jquery')
```
5. ES6 module pattern
```
import jquery from 'jquery';
```
## 3.9.2 Why use ES6 module
1. standarized
2. Statically analysed
    - Improved autocomplete
    - Intelligent refractoring
    - Fails fast
    - Tree shaking
3. Easy to read
    - named imports
    - Default imports
## 3.9.3 Selecting the bundlers
1. Require JS
    - First popular bundler
    - Utilizes and helped popularize AMD pattern
2. Browserify
    - The first bundler to reach mass adoption
    - Bundle npm package for the web
    - Large plugin ecosystem
    - Final verdict - Simple
3. Webpack
    - Bundles more than JS
    - Imports images, css etc like JS
    - Build in hot reloading web server
    - Final verdict - Comprehensive
4. Rollup
    - Tree shaking
    - Faster loading production code
    - Quite new
    - Great for library authors
    - No hot reloading and code splitting yet
    - Final verdict - Tree shaking and performance
5. JSPM
    - Uses SystemJS, a universal module loader
    - can load modules at runtime
    - Has its own package manager
    - can install from npm and git
    - Uses rollup
    - Final Verdict - Runtime loader and package manager

## 3.9.4 Why webpack
-  Much more than just JS
    - CSS
    - Images
    - Fonts
    - HTML
- Bundle splitting
- Hot module Reloading
## 3.9.5 Webpack setup
1. Create a file webpack.config.dev.js
and paste the following content in it
```
import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        debug: true,
        noInfo: false,
      })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}
```
2. Change srcServer.js file to accomodate changes
```
//add code for imports
import webpack from 'webpack';
import config from '../webpack.config.dev.js'

//add code to initialize compiler
const compiler = webpack(config);

//add middleware to compile befor running
app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath:config.output.publicPath
}));
```
3. add file in src folder with name index.js with following content
```
import numeral from 'numeral';

const courseValue =numeral(1000).format('$0,0.00');
console.log(`i would pay ${courseValue} for this awesome course`);
```
## 3.9.6 Adding css
1. Add file styles.css in src folder with some style in it and import it in top of css file
```
import './styles.css';
```
Top of index.js file

## 3.9.7 Source map
- maps code back to original source
- part of our build
- Download if you open developer tools

Add debugger to index.js file
```
debugger;
```
now run the code. It will stop at the debugger at the same file with original code.








