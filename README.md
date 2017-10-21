# Javascript Development Environment For Konfinity
## Why we need a starter kit
1. Codifies
    - Decisions
    - Best Practices
    - Lesson's learned
2. Encourages consistency
3. Avoids forgetting important details
4. Increases Quality
5. Avoid repeating work

A starter kit a living, automated and interactive checklist. Developers know what to do but it's easier to overlook step
## What belongs in the starter kit
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

## What to look for in an Editor
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

### EditorConfig for better consistency (.editorconfig)
No need for whole organization to have same editor. One can achieve better consistency by using .editorconfig file in root of your project and commiting it to git so that all team members could use same kind of editor styles
check editorconfig.org This website provides basic editorconfig file for major editors. Some of them needs plugins to enable this file.

## Javascript Package managers
### Some popular ones
1. **Bower** - Initially it dubbed itself as package manager for web but today largely people moved away from bower to npm. It became popular by supporting entire libraries and frameworks in a format that didn't require a build step but today's almost everyone has a build step in their project so this big advantage became a huge bottleneck
2. **npm** - It has almost every library for frontend as well as backend along with a strong support for scripting.
3. **jspm** - Not a very popular but interesting option that helps build your package from its own repository of packages as well as other locations such as git and npm repos. In front of powerful bundlers of npm it's too early to start in production with jspm

### Working with node
1. Install node
2. Rum command `npm init` and check all options by editing or just using return key
3. Install the following package 
`babel-cli babel-core babel-loader babel-preset-latest babel-register chai chalk cheerio cross-env eslint eslint-plugin-import eslint-watch express html-webpack-plugin jsdom localtunnel mocha nock npm-run-all nsp numeral open rimraf webpack webpack-dev-middleware webpack-hot-middleware webpack-md5-hash` by running command
 ```
 npm install --save-dev package names
 ```
## Package Security
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

## Development web server
### Tasks
1. Review Development webserver options
2. Configure a development webserver
3. Services for sharing your work

### Some Options
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

### Integrate Express
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

### Sharing work in progress
One option is to deploy directly to AWS or any other hosting service but that consume time and money so it they both are important to you keep reading

#### Options for sharing
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

We will recommend localtunnel

