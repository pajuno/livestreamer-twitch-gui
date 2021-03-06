import {
	get,
	inject
} from "Ember";
import ModalDialogComponent from "components/modal/ModalDialogComponent";
import layout from "templates/components/modal/ModalFirstrunComponent.hbs";


const { service } = inject;


export default ModalDialogComponent.extend({
	versioncheck: service(),

	layout,

	"class": "modal-firstrun",

	goto: "goto",


	actions: {
		settings() {
			this.sendAction( "goto", "settings" );
			this.send( "start" );
		},

		start() {
			this.send( "close" );
			get( this, "versioncheck" ).checkForNewRelease();
		}
	}
});
