import {
	get,
	set,
	setProperties,
	RSVP,
	Component
} from "Ember";
import layout from "templates/components/list/ContentListComponent.hbs";


export default Component.extend({
	layout,

	tagName: "div",
	classNameBindings: [ ":content-list-component", "float::content-list-nofloat" ],

	content   : null,
	compare   : null,
	duplicates: null,

	infiniteScroll: true,
	float: true,

	length : 0,
	initial: 0,


	init() {
		this._super.apply( this, arguments );

		var length = get( this, "content.length" );
		setProperties( this, {
			initial   : length,
			length,
			duplicates: {}
		});

		var compare = get( this, "compare" );
		if ( compare !== null ) {
			this.checkInitialDuplicates( compare );
		}
	},


	_contentLengthObserver: function() {
		var content = get( this, "content" );
		var compare = get( this, "compare" );
		var index   = get( this, "length" );

		if ( compare !== null ) {
			content = content.mapBy( compare );
		}

		this.checkDuplicates( content, index );
	}.observes( "content.length" ),

	checkInitialDuplicates( compare ) {
		var content = get( this, "content" ).mapBy( compare );
		this.checkDuplicates( content, 1 );
	},

	checkDuplicates( content, index ) {
		var self       = this;
		var duplicates = get( this, "duplicates" );
		var length     = get( content, "length" );
		var diff       = -length + index - 1;


		// wait for all potential DS.PromiseObjects to resolve first
		RSVP.all( content ).then(function( content ) {
			for ( var found; index < length; index++ ) {
				found = content.lastIndexOf( content[ index ], diff );
				if ( found !== -1 ) {
					set( duplicates, String( index ), true );
				}
			}

			self.notifyPropertyChange( "duplicates" );
			set( self, "length", length );
		});
	}

}).reopenClass({
	positionalParams: [ "content" ]
});
