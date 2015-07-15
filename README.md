# barebone-nodejs-project
A node js project to kickstart your web application


##### Included package setup

1. Angular.js framework
2. Gulp build tool with basic tasks
3. Bower package manager for library management

##### How to setup

Run `$ npm install` and you are done! ![Yey!!!!](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/718smiley.svg/30px-718smiley.svg.png)

##### Project structure

```
./Project Dicrectory
  |
  |---/public //directory for compiled deployable project files('gulp build' puts all compiled files here).  
  |
  |---/src
  |     |---/app
  |     *     |
  |           |---/index.jade
  |           |
  |           |---/js //directory for all your coffee script files
  |           |
  |           |---/css //directory for all your less files 
  |           |
  |           |---/views //directory for all you jade templates
  |           *
  |
  |---/gulpfile.js
  |
  |---/config.json
  |
  |---/package.json
  |
  |---/bower.json
  |
  |---/Readme.md
  |
  .
```

##### Managing dependencies

You can manage your dependencies using package.json and bower.json

1.  Add all your server depencies to package.json and client dependencies to bower.json
2.  Run command `$ npm install` to install new dependencies

##### Managing Direcitory structure

Directory structure for project is defined in `config.json` file.
modify the `config.json` file to change project directory structure


##### Gulp basic tasks

Run `$ gulp`  or `$ gulp build` to build your project
Run `$ gulp coffee` to compile and copy coffeescript files to public directory 
Run `$ gulp templates` to compile and copy jade templates to public directory 
Run `$ gulp less` to compile and copy less script files 
Run `$ gulp fonts` to copy bootstrap font files 
Run `$ gulp clean` to clean public directory 
Run `$ gulp vendor` to copy library files 

##### Livereload

Run `$ gulp watch` to watch for changes and livereload your coffeescript,jade and less files


##### Run the server

Run '$ gulp serve' to run server. default to port:3000 you can change it in `gulpfile.js` file.

maintained By [Taj Ahmed](http://tajahmed.bitbucket.org)
