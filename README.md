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

