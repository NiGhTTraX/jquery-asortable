jquery-asortable
================

[![Greenkeeper badge](https://badges.greenkeeper.io/NiGhTTraX/jquery-asortable.svg)](https://greenkeeper.io/)

asortable is a [jQuery UI](http://www.jqueryui.com) plugin that extends the
normal sortable plugin and allows you to use it on absolutely positioned items.


Usage
-----

Include ```jquery-asortable.js``` on your page, along with
[jQuery](http://www.jquery.com) and [jQuery UI](http://www.jqueryui.com), and
use it like you would use the normal sortable plugin.

```javascript
$("#asortable").asortable();
```

Since asortable extends the sortable plugin, you can pass in the same options.


Building
--------

asortable uses the [Grunt](https://github.com/gruntjs/grunt) build system. To
build asortable, you must have [node.js](https://github.com/joyent/node)
installed and then run the following commands:

```bash
# Install the Grunt CLI.
npm install -g grunt-cli

# Clone the repository.
git clone git@github.com:NiGhTTraX/jquery-asortable.git
cd jquery-asortable

# Install node module dependencies.
npm install

# Run the build task.
grunt
```

If all went well, you will find a minified version of the plugin in the
```build/``` folder.


Testing
-------

Run ```grunt test``` to run the tests in
[PhantomJS](https://github.com/ariya/phantomjs) or open ```tests/index.html```
to run them in your browser. Tests are written using the
[QUnit](http://www.qunitjs.com/) framework and the [jQuery Event Unit Testing
Helpers](https://github.com/jquery/jquery-simulate).

To enable coverage, place the ```resources/``` and ```tests/``` folders in your
webserver and run the tests from there with the coverage option in QUnit checked
(running coverage locally will throw a cross-domain error). Coverage is done
using [blanket.js](http://www.blanketjs.org).
