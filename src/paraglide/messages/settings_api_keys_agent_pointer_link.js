/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_Agent_Pointer_LinkInputs */

const zh_settings_api_keys_agent_pointer_link = /** @type {(inputs: Settings_Api_Keys_Agent_Pointer_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Skill`)
};

const en_settings_api_keys_agent_pointer_link = /** @type {(inputs: Settings_Api_Keys_Agent_Pointer_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Skill`)
};

/**
* | output |
* | --- |
* | "Agent Skill" |
*
* @param {Settings_Api_Keys_Agent_Pointer_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_agent_pointer_link = /** @type {((inputs?: Settings_Api_Keys_Agent_Pointer_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_Agent_Pointer_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_agent_pointer_link(inputs)
	return zh_settings_api_keys_agent_pointer_link(inputs)
});