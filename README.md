Headstart
========

This is Headstart, a starting point for projects that use the HTML5 Boilerplate, Skel.js, Less and are to be hosted on Heroku.

It comes preloaded with some basic Skel breakpoints and configuration and has external Less and Test directories for use in a development environment that are below the root 'public' directory defined by Rack. 

Less Compilation
------------------

The Less folder is designed to sit outside the root level. There is an 'output' folder which should be watched or monitored by your precompiler, and an 'imports' folder which is intended for less files which are referenced by files in the output directory but should not be compiled themselves.

	-less
	  - imports
	  - output


Rack
------

The project is designed to be uploaded to Heroku which needs some hacking to host a static website. This consists of two files the `Gemfile` & `config.ru`. If you are not uploading to Heroku these can be removed.

The following configuration sets up the directory structure in config.ru, if there is a problem accessing files, it is probably a problem with the `:urls` array which declares the visible directories relative to the root.

	use Rack::Static,
	  :urls => ["/images", "/js", "/css"], 
	  :root => "public"

	run lambda { |env|
	  [
		200,
		{
		  'Content-Type'  => 'text/html',
		  'Cache-Control' => 'public, max-age=86400'
		},
		File.open('public/index.html', File::RDONLY)
	  ]
	}

Add some JS
----------------

A custom namespace is premade declared using the following syntax: `__namespace = (function(){})();`

	__privatenamespace = (function(){
		//private
		var privates = {
			sayHello : function(){
				console.log("hello");
				return true
			}
		}
		//public
		return {
			sayHello : function (){
				return privates.sayHello();
			}
		}
	})();

Private variables and methods are stored in an object literal 

	var private = {
		hi: function(){
			console.log("hello");
		}
	};
	

Public methods and properties exposed in the namespace scope by returning and object literal which can reference the private object.

	return { 
		sayHi : function(){
			private.hi()
		}
	}

Jasmine testing
---------------------

Jasmine is built in outside the public directory in a "test" folder. Just add any new spec files for any new scripts you add.


SkelJS responsive styles through JS
------------------------------------

The core library is included in `/js/vendor`, with a config file describing breakpoints in `/js`.

    window._skel_config = {
        prefix : 'css/main',
        resetCSS: true,
        boxModel: 'border',
        grid : {gutters:5},
        breakpoints : {
            'sk-13plus' : {range : "1300-", containers:1280, grid : {gutters : 50}},
            'sk-961plus': {range : "961-1299", containers: 'fluid', grid : {gutters : 20}},
            'sk-600plus': {range : "600-960", containers: 'fluid', grid : {gutters : 10}},
            'sk-480plus': {range : "480-599", containers:'fluid', grid : {gutters : 5 }},
            'sk-480min' : {range : "-480", containers: 'fluid', grid : {collapse : true}}
        }
    };
    skel.init();

Add CSS stylesheets for each breakpoint named main-[DECRIPTION]
according to the names provided in the config object.

Add basic styles in a core file.

Finito!
-----------

Enjoy, hope it saves you some time and effort. Tweet appreciation to #AdamDHarrington

