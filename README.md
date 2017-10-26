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

## 3.10 Linting
- Enforces Consistency
    - Curly brace position
    - confirm / alert
    - Trailing commas
    - Globals
    - eval
- Avoids Mistakes
    - Extra parenthesis
    - Overwriting functions
    - Assignment in conditionals
    - Missing default case in switch
    - debugger / console.log
## 3.10.1 Popular Linters
- Jslint
- JSHint
- ESlint (most popular and robust)

For working in Typescript use TSlint until ESlint adds support for linting

## 3.10.2 Configuring ESlint
Core decisions
- config format?
- which build-in rules?
- Warning or errors?
- Which plugins
- Use preset instead?

1. Create eslintrc file at root project level
```
{
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "node": true,
        "mocha": true
    },
    "rules": {
        "no-console": "warn"
    }
}
```
2. Add lint script in package.json script tag
```
"lint": "esw webpack.config.* src buildScripts --color"
```
3. Run lint task by typing the following command
```
npm run lint
```
4. you will be getting some errors at following line before the console.log statement
```
/* eslint-disable no-console */
```
this will supress eslint warning

5. Make eslint watch files
```
"lint:watch":"npm run lint -- --watch"
```
modify start task to run lint task simultaneouly
```
"start":"npm-run-all --parallel security-check open:src lint:watch"
```
## 3.11 Testing and Continuous Integration
### 3.11.1 Javascript testing styles
1. Unit - Single function or module
2. Integration - Interaction between modules
3. UI - Automated interactions with ui

### 3.11.2 Unit test decisions
1. Framework
    - Mocha
    - Jasmine
    - Tape
    - QUnit
    - AVA
    - Jest
2. Assert Library
    -What is assertion
    ```
    //Declare what you expect
    expect(2+2).to.equal(4)
    assert(2+2).equals(4)
    ```
    Most popular library is chai others are should.js, expect
3. Helper Libraries
    - JSDOM
        - simulate the browser's DOM
        - Run DOm related tests without browser
    - Cheerio
        - jQuery for the server
        - Query virtual DOM using jQuery selectors
4. Where to run tests
    - Browser
        - Karma, Testem
    - Headless browser
        - PhantomJS
    - In-memory Dom
        - JSDOM
5. Where to place tests
    - Centralized
        - Less "noise" in src folder
        - Deployment confusion
        - Inertia
    - Alongside
        - Easy imports
        - Clear visibility
        - Convenient to open
        - No recreating folder structure
        - Easy file moves
6. When to run tests
    - Unit tests
        - Test a small unit
        - Often single function
        - Fast
        - Run upon save
    - Integration tests
        - Test multiple units
        - Often involves clicking and waiting
        - slow
        - often run on demand, or in QA

After discussing with pros and cons we settled down to these decisions
Framework: mocha, assertion-library: chai, Helper-libraries: JSDOM, Where to run tests: Node, Where to place tests: alongside, when to run tests: upon save

### 3.11.3 Normal Test setup
1. Create file testSetup.js in buildScripts folder with following content
```
require('babel-register')();
require.extensions['.css'] = function(){}
```
2. Create test script in package.json file with following code
```
"test": "mocha --reporter progress buildScripts/testSetup.js \"src/**/*.test.js\""
```
3. Create index.test.js file in src folder with following content
```
import {expect} from 'chai';

describe('our first test',() =>{
    it('should pass',() => {
        expect(true).to.equal(true);
    });
});
```
4. Run test by running following command in terminal
```
npm test
```
This test should pass as true is equal to true. To make this test fail use true is equal to false in index.test.js file.

### 3.11.4 DOM Testing
Add following code into your index.test.js file
```
//in imports
import fs from 'fs';
import jsdom from 'jsdom';
const {JSDOM} = jsdom;

// describe dom test
describe('index.html',()=>{
    it('should konfinity dashboard', (done) =>{
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        const dom = new JSDOM(index);
            const h1 = dom.window.document.getElementsByTagName('h1')[0];

            expect(h1.innerHTML).to.equal('Starter Kit');
            done();
            window.close();
    })
})
```
now run test to check for result

### 3.11.5 Watching tests
add following command to scripts
```
"test:watch":"npm run test -- --watch"
```
run this task simultaneouly with other start scripts by modifying start script
```
"start": "npm-run-all --parallel security-check open:src lint:watch test:watch",
```

## 3.12 Continuous Integration
### 3.12.1 Why CI
1. Forget to commit new file
2. Forget to update package.json
3. Commit doesn't run cross plateform
4. Node version conflict
5. Bad merge
6. Didn't run tests
7. Catch mistakes quickly

### 3.12.2 What does a CI server do?
1. Run Automated build
2. Run your tests
3. Check code coverage
4. Automate deployement

### 3.12.3 Choosing a CI server (options)
1. Travis (Linux based)
2. Appveyor (Windows based)
3. Jenkins (Highly configurable)
4. circleCi
5. semaphore
6. snapCi

Jenkins and Travis are most popular ones so have large support

### 3.12.4 Setting up Travis
1. visit https://travis-ci.org. signup using your github profile then it will take few seconds to redirect to your profile page
2. Create a file .travis.yml (configuration file) at root of the project with the following code
```
language: node_js
node_js:
  - "6"
```
3. commit and push the code to github. Travis dashboard will show creation of your desired environment on linux and running test so that you could be confident enough to deploy your code to production

## 3.13 HTTP calls
### 3.13.1 HTTP calls approach
1. node
    - http
    - request
2. Browser
    - XMLHttpRequest
    - jquery
    - Fetch
3. Node and Browser
    - isomorphic-fetch
    - xhr
    - superagent
    - axios
### 3.13.2 Why centralize Api Calls?
- Configure all calls
- Handle preloader logic
- Handle errors
- Single seam for mocking

### 3.13.3 Setting up centralized calls
1. Add a mock url and api to srcServer.js file with following code
```
app.get('/users', function(req, res){
res.json([
{"id":1, "firstname":"kamal", "lastname":"pandey", "email":"xyz@konfinity.com" },
{"id":2, "firstname": "agent", "lastname":"smith", "email":"new@matrix.com"},
{"id":3, "firstname":"good", "lastname":"god", "email":"heaven@god.com"}
]);
});
```
2. Create a file userApi.js in api folder inside src folder with following code
```
import 'whatwg-fetch';

export function getUser(){
return get('users');
}

function get(url){
return fetch(url).then(onSuccess, onError);
}

function onSuccess(response){
return response.json();
}

function onError(error){
console.log(error) //eslint-disable-line no-console
}
```
3. Install whatwg-fetch by typing following command in terminal
```
npm install --save whatwg-fetch
```
4. Remove all previous code from index.js file and add following code in it
```
import './styles.css';

import {getUser} from './api/userApi';

getUser().then(result =>{
    let userBody = "";
result.forEach(user => {
userBody +=`<tr>
<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
<td>${user.id}</td>
<td>${user.firstname}</td>
<td>${user.lastname}</td>
<td>${user.email}</td>
</tr>`
});
global.document.getElementById('users').innerHTML = userBody;
});
```

5. Add table content into html file 
```
<table>
        <thead>
            <th>&nbsp;</th>
            <th>id</th>
            <th>first name</th>
            <th>last name</th>
            <th>email</th>
        </thead>
        <tbody id="users">

        </tbody>
</table>
```
### 3.13.4 Selective polyfilling
Detects polyfills according to browser. check polyfill.io website for more details. To polyfill use following code
```
<script src="https://cdn.polyfill.io/v2/polyfill.js?features=fetch">
</script>
```
## 3.14 Mocking HTTP
### 3.14.1 Why mock HTTP
- Unit testing
- Instant response
- Keep working when services are down
- Rapid Prototyping
- Avoid interteam bottlenecks
- Work offline

### 3.14.2 Methods for mocking HTTP
In decreasing order of upfront work and increasing order of realism and customizations
1. Static JSON
2. Json server 
3. JSON Server + JSON schema faker
4. Express, etc

### 3.14.3 Mocking Strategy for this starter kit
1. Declare our schema:
    - JSON Schema faker
2. Generate Random Data
    - faker.js
    - chance.js
    - randexp.js
3. Serve Data via API
    - JSON server

### 3.14.4 Steps
1. Creating the mock api data. Create a file named mockDataSchema.js in buildScripts and paste the following code
```
export const schema = {
    "type": "object",
    "properties": {
      "users": {
        "type": "array",
        "minItems": 3,
        "maxItems": 5,
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "unique": true,
              "minimum": 1
            },
            "firstName": {
              "type": "string",
              "faker": "name.firstName"
            },
            "lastName": {
              "type": "string",
              "faker": "name.lastName"
            },
            "email": {
              "type": "string",
              "faker": "internet.email"
            }
          },
          "required": ["id", "firstName", "lastName", "email"]
        }
      }
    },
    "required": ["users"]
  };
```
2. Generate mock data. Create a file genarateMockData.js file in buildScripts folder with the following code. 
```
import jsf from 'json-schema-faker';
import{schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

/* eslint-disable no-console*/
const json = JSON.stringify(jsf(schema));
fs.writeFile('./src/api/db.json', json, function(err){
if(err){
return console.log(chalk.red(err));
}
else{
console.log(chalk.green('mock data generated'));
}
});
```
3. Create a script to generate data in package.json with following code
```
"generate-mock-data": "babel-node buildScripts/generateMockData",
```
It will create a db.json file in src/api folder with some fake data
4. Start a mock-api-data server by creating a script in package.json file
```
 "prestart-mockapi": "npm run generate-mock-data",
 "start-mockapi": "json-server --watch src/api/db.json --port 3001"
 ```
 5. change the start script with the following code
 ```
"start": "npm-run-all --parallel security-check start-mockapi open:src lint:watch test:watch",
```
6. create a file baseUrl.js in src/api folder to detect the url so that it could serve from the mock api in case of localhost and from express server in case of some other url
```
export default function getBaseUrl(){
const inDevelopment =window.location.hostname === 'localhost';
return inDevelopment? 'http://localhost:3001/':'/';
}
```
7. Import this url file in src/api/userApi.js file with the following code
```
import getBaseUrl from './baseUrl';
const baseUrl = getBaseUrl();
...
function get(url){
return fetch(baseUrl + url).then(onSuccess, onError);
}
```
8. Run the server with `npm start` command it will run the mock api json server and will serve from there

9. Manipulating data via json server - Add following code to src/api/userApi.js file to delete the user
```
export function deleteUser(id){
return del(`users/${id}`);
}
function del(url){
    const request =new Request(baseUrl + url, {
        method:'DELETE'
    });

    return fetch(request).then(onSuccess, onError);

}
```
10. Add delete button functionality to the ui of the application by adding following code to index.js file
```
const deleteLinks = global.document.getElementsByClassName('deleteUser');
Array.from(deleteLinks, link =>{
link.onclick = function(event){
const element =event.target;
event.preventDefault();
deleteUser(element.attributes['data-id'].value);
const row =element.parentNode.parentNode;
row.parentNode.removeChild(row);
}
});
```
11. The Application will display the delete button, clicking that will delete the table row from ui as well as db.json

## 3.15 Production build
### 3.15.1 Minification
- Shortens variable and function names
- Removes comments
- Removes whitespace and new lines
- Dead code elimination / tree shaking
- Debug via source maps

### 3.15.1.1 Production webpack configuration
1. create a file webpack.config.prod.js at root of the project
2. Inside that copy and paste the code of webpack.config.dev.js
3. change devtools key to accept `souce-map` instead of `inline-source-map`
```
devtools:'source-map'
```
4. In the output find path key and change it to 
```
path: path.resolve(__dirname, 'dist'),
```
to add path of dist

5. Add plugin in plugins key as 
```
new webpack.optimize.UglifyJsPlugin(),
```
this will minify the js created in dist folder
6. create a file build.js in buildScripts folder with the following content 
```
import webpack from 'webpack';
import config from '../webpack.config.prod';
import chalk from 'chalk';

/*eslint-disable no-console*/

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This may take a while ...'));

webpack(config).run((err, stats) => {
    if(err){
        console.log(chalk.red(err));
        return 1;
    }
    const jsonStats = stats.toJson();
    if(jsonStats.hasError){
return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }
if(jsonStats.hasWarning){
console.log(chalk.yellow('webpack generate the following warning:'));
jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
}
console.log(`webpack stats ${stats}`);

console.log(chalk.green('your app has been build for production'));
    return 0;
});
```
7. create a file distServer.js for serving the production minified build with the following code 
```import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 5001;

const app = express();
app.use(compression());
app.use(express.static('dist'));


app.get('/', function(req, res){
res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
res.json([
{"id":1, "firstName":"kamal", "lastName":"pandey", "email":"xyz@konfinity.com" },
{"id":2, "firstName": "agent", "lastName":"smith", "email":"new@matrix.com"},
{"id":3, "firstName":"good", "lastName":"god", "email":"heaven@god.com"}
]);
});

app.listen(port, function(err){
    if(err){
        /* eslint-disable no-console*/
console.log(err);
    }
else{
open('http://localhost:'+port);
}
});
```
there will be new node modules here and there install them via node package manager and you will be fine

8. Toggling the mock api. If on production the api should be from server and while on dev the mock should work. It could be controlled by changing the code  in the baseUrl.js file to following. The function is taken directly from stackoverflow.
```
export default function getBaseUrl() {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:5001/' : '/';
  }

  function getQueryStringParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
```
9. Now to use mock api use url parameters like shown below
http://localhost:3000/user/?mockApi=true. This will ask baseUrl to generate the url to get the data. 
10. Add scripts in package.json to run production build
```
"clean-dist":"rimraf ./dist && mkdir dist",
"prebuild":"npm-run-all clean-dist test lint",
"build":"babel-node buildScripts/build.js",
"postbuild":"babel-node buildScripts/distServer.js"
```
now try to run the build process by `npm run build`. It will throw an error as there is no index.html file in the dist folder

### 3.15.1.2 Dynamic HTML generation
#### Why Change html for production build
- Reference bundles automatically
- Handle dynamic bundle names
- Inject production only  resources
- Minify
#### Referencing bunlded assets in HTML
There are some methods to complete that like
- Hard code 
- manipulate via node
- html-webpack-plugin

Use html-webpack-plugin for dynamic generation of html. Add code in webpack.config.prod.js 
```
//import html webpack plugin
import HtmlWebpackPlugin from 'html-webpack-plugin';
//inside the plugin property
new HtmlWebpackPlugin({
    template:'src/index.html',
    inject:true
});
```
Remove script tag from index.html in src folder

To minify the html file to reduce size add minify setting to html webpack plugin
```
minify:{
        removeComments: true,
        collapseWhitespace:true,
        removeRedundantAttributes:true,
        useShortDoctype:true,
        removeEmptyAttributes:true,
        removeStyleLinkTypeAttributes:true,
        keepClosingSlash:true,
        minifyJS:true,
        minifyCSS:true,
        minifyURLs:true
},
``` 
this will minify the html file
#### 3.15.1.3 Bundle splitting
Why bundle Splitting?
- Speed initial page load
- Avoid redownloading all libraries

1. Create a file vendor.js in src folder to import all third party packages with following code
```
/* eslint-disable no-unused-var */
import fetch from 'whatwg-fetch';
```
2. Change entry property in webpack.config.prod.js file
with following code 
```
entry: {
    vendor:path.resolve(__dirname, 'src/vendor'),
    main:path.resolve(__dirname, 'src/index')
}
```
and in output.filename key
```
filename: '[name].[chunkhash].js'
```
this will take name from 'entry' and create a file with the same name

and in the plugins key add another plugin
```
  new webpack.optimize.CommonsChunkPlugin({
        name:'vendor'
    }),
```
now run the code with `npm run build`, this will create 2 js files "main.js" and "vendor.js".

#### 3.15.1.4 Cache busting
Why cache bust
- save HTTP requests
- force request for latest version

solutions
- hash bundle filename
- Generate HTML dynamically

```
import WebpackMd5Hash from 'webpack-md5-hash';
```
change filename property in output key webpack.config.prod.js file
```
filename: '[name].[chunkhash].js'
```
and in plugin add this code 
```
new WebpackMd5Hash();
```
build using `npm run build`, this will generate the js files with hash and will also add the same name to html file

Everytime file changes it will add a new hash to name and declare that file in script of html file so that browser request for this new file. 

#### 3.15.1.5 Extract and minify css
use plugin extract-text-webpack-plugin. 
```
import WebpackTextPlugin from 'webpack-text-webpack-plugin';
```
add this plugin into the plugins property
```
new ExtractTextPlugin('[name].[contenthash].css'),
```
and in the rules change css rule to 
```
 {test: /\.css$/, use: ExtractTextPlugin.extract({
fallback:'style-loader',
use:'css-loader'
})
}
```
now run the code using `npm run build` this will create a css file. 

#### 3.15.1.6 Error logging
For error loggin there are various types of services some of the popular ones are
- trackJS
- Sentry
- new Relic
- Raygun

JS loggin error what to look for 
- Error Metadata
    - Browser
    - stack trace
    - previous action
    - custom API for enhanced tracking
- Notifications and integration
- Analytics and filtering 
- Pricing

We will be using trackJS

1. Signup in their website 
2. After signup a copy paste script will be created by trackJS 
3. Add this script to top of the index.html page inside head tag
```
 <!-- BEGIN TRACKJS -->
 <script type="text/javascript">
            window._trackJs = {
                token: 'yourToken'
            };
        </script>
        <script type="text/javascript" src="https://cdn.trackjs.com/releases/current/tracker.js"></script>
        <!-- END TRACKJS -->
```
and anywhere in js file add this code
```
 try
 {trackJs.track('ahoy trackjs!');}
catch(error){}
```
This will show 'ahoy trackjs' in trackjs dashboard after running the application. But we want tracking only in production mode.

#### 3.15.1.7 HTML templates via Embedded js(EJS)
add trackJSToken in webpack.config.prod.js file inside HtmlWebpackPlugin 
```
...
inject:true,
trackJSToken:'Your token goes here'
...
```
now use templates inside the html file, change add if statement to check whether token available or not. If in production mode it will be read from 'webpack.config.prod.js' file otherwise from 'webpack.config.dev.js' file which don't have token so the tracking will take place only in case of production build

```
<% if(htmlWebpackPlugin.options.trackJSToken){%>
    <!-- BEGIN TRACKJS -->
    <script type="text/javascript">
        window._trackJs = {
            token: '<%= htmlWebpackPlugin.options.trackJSToken%>'
        };
    </script>
    <script type="text/javascript" src="https://cdn.trackjs.com/releases/current/tracker.js"></script>
    <!-- END TRACKJS -->
<% } %>
```
This will add dynamically the token of the trackjs file




