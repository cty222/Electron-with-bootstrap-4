// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


// for jQuery and Bootstrap 4
window.jQuery = window.$ = require('jquery');
require('popper.js');
require('bootstrap');

// initial mouse right click
require('./lib/mouseRightClick');