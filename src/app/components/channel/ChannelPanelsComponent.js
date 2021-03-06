import {
	run,
	Component
} from "Ember";
import Masonry from "Masonry";
import layout from "templates/components/channel/ChannelPanelsComponent.hbs";


const { scheduleOnce } = run;


export default Component.extend({
	layout,

	tagName: "section",
	classNames: [ "content", "content-panels" ],

	action: "openBrowser",

	_masonry: function() {
		var container = this.$( "ul" )[0];
		scheduleOnce( "afterRender", function() {
			return new Masonry( container, {
				itemSelector: ".channel-panel-item-component",
				columnWidth: ".channel-panel-item-component",
				transitionDuration: 0
			});
		});
	}.on( "didInsertElement" ),

	actions: {
		openBrowser( url ) {
			this.sendAction( "action", url );
		}
	}
});
