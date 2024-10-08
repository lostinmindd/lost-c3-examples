import { Config } from "@Config";

const C3 = globalThis.C3;

class LostInstance extends globalThis.ISDKInstanceBase {
	/**
	 * Ready to use in this._trigger(this.PluginConditions.{functionName})
	 */
	readonly PluginConditions = C3.Plugins[Config.AddonId].Cnds;

	constructor() {
		super();
		
		const properties = this._getInitProperties();
		if (properties) {

		}

	}
	
	_release() {
		super._release();
	}
	
};

C3.Plugins[Config.AddonId].Instance = LostInstance;
export type { LostInstance as Instance };