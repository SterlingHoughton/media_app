import {ElementCompnent} from "../../lib/component";

export class PlaylistContextMenuComponent extends ElementCompnent {
	constructor() {
		super("div");
		this.$element.addClass("context-menu");
	}
}