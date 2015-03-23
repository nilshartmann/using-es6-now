ES6 Module Example
==================
This is an example of how to use [Babel](https://babeljs.io) to enable ES6 features, including ES6 modules, in your browser.

The example app
---------------
The example app is a single HTML page containing a single component that allows a user to select it's favorite soccer team. It's neither complex nor
creative but should be enough to demonstrate some of the new ES6 features and how to enable them in browser.

There are three branches demonstrating different use cases. You can compare the examples by comparing the individual branches.

* `01-Babel_Runtime_No_Modules`: This branch uses no modules but only a single ES6 JavaScript file. This file gets transpiled at runtime.
* `02-Babel_Runtime_ES6_Modules`: Here we separate the app's logic into four ES6 modules. Still they are transpiled at runtime, module support is enabled by [SystemJS](https://github.com/systemjs/systemjs) and [es6-module-loader.js](https://github.com/ModuleLoader/es6-module-loader)
* `03-Babel_CompileTime_ES6_Modules` Same as branch 02 but transpiling the ES6 files using Gulp. In order to run this example please execute `gulp` to run babel. Then open index.html in you browser.

Before running an example please checkout the branch you want and then run `npm install` to install babel (and gulp for branch 03).

To run example 01 and 02 you than should start a webserver (i.e. from WebStorm) and open `index.html`.
For example 03 please run `gulp`. The included gulp config file will compile the ES6 files (and watches for changes to them). Then start a webserver and open `index.html`

Please feel free to send me comments or questions.

