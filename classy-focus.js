/** Classy Outline
	- Enables accessible styling of the browser focus-rectangle.
	- Toggles between "co-focus-mouse" and "co-focus-keyboard" classes on <body> (default)
	- Based on http://github.com/lindsayevans/outline.js
 **/
(function(d){

	var	target_element = 'body',
		focus_class_mouse = 'classy-focus-mouse',
		focus_class_keyboard = 'classy-focus-keyboard',

		dom_events = 'addEventListener' in d,
		add_event_listener = function(type, callback) {
			// Basic cross-browser event handling
			if (dom_events) {
				d.addEventListener(type, callback);
			} else {
				d.attachEvent('on' + type, callback);
			}
		};

	var setTagClass = function( _tag_str, _cl_str ) {
		var _tgt = d.getElementsByTagName( _tag_str )[0];
		var _arr = _tgt.getAttribute( "class") || "";
			_arr = _arr.split(" ");

		if ( _arr.indexOf( _cl_str ) == -1 )  {
			_arr.push( _cl_str );
			_tgt.setAttribute( "class", _arr.join(" ").trim() );
		} 
	};

	var removeTagClass = function( _tag_str, _cl_str ) {
		var _tgt = d.getElementsByTagName( _tag_str )[0],
			_arr = _tgt.getAttribute("class") || "";
			_arr = _arr.split(" ");

		var _idx = _arr.indexOf( _cl_str );
		if ( _idx != -1 )  {
			_arr.splice( _idx, 1 )
			_tgt.setAttribute( "class", _arr.join(" ") );
		}
	};

	// Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
	add_event_listener('mousedown', function(){
		removeTagClass( target_element, focus_class_keyboard );
		setTagClass( target_element, focus_class_mouse );
	});

	add_event_listener('keydown', function(){
		removeTagClass( target_element, focus_class_mouse );
		setTagClass( target_element, focus_class_keyboard );
	});
	// Classy-focus ignores 'touchend'
})(document);
