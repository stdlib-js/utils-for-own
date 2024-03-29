/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var pkg = require( './../package.json' ).name;
var forOwn = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var obj;
	var i;

	function onKey( v ) {
		if ( isnan( v ) ) {
			b.fail( 'should not be NaN' );
		}
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj = {
			'a': i,
			'b': i+1,
			'c': i+2,
			'd': i+3,
			'e': i+4
		};
		forOwn( obj, onKey );
		if ( isnan( obj.a ) ) {
			b.fail( 'should not be NaN' );
		}
	}
	b.toc();
	if ( isnan( obj.a ) ) {
		b.fail( 'should not be NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::loop', function benchmark( b ) {
	var keys;
	var obj;
	var i;
	var j;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj = {
			'a': i,
			'b': i+1,
			'c': i+2,
			'd': i+3,
			'e': i+4
		};
		keys = Object.keys( obj );
		for ( j = 0; j < keys.length; j++ ) {
			if ( isnan( obj[ keys[ j ] ] ) ) {
				b.fail( 'should not be NaN' );
			}
		}
	}
	b.toc();
	if ( isnan( obj.a ) ) {
		b.fail( 'should not be NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
