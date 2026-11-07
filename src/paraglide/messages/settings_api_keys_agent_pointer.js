/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ link: NonNullable<unknown> }} Settings_Api_Keys_Agent_PointerInputs */

const zh_settings_api_keys_agent_pointer = /** @type {(inputs: Settings_Api_Keys_Agent_PointerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`接入 Agent Skill 无需手动创建 API Key，可在「${i?.link}」页签通过配对码完成。`)
};

const en_settings_api_keys_agent_pointer = /** @type {(inputs: Settings_Api_Keys_Agent_PointerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Connecting an Agent Skill needs no manual API Key. Pair it with a code on the “${i?.link}” tab.`)
};

/**
* | output |
* | --- |
* | "Connecting an Agent Skill needs no manual API Key. Pair it with a code on the “{link}” tab." |
*
* @param {Settings_Api_Keys_Agent_PointerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_agent_pointer = /** @type {((inputs: Settings_Api_Keys_Agent_PointerInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_Agent_PointerInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_agent_pointer(inputs)
	return zh_settings_api_keys_agent_pointer(inputs)
});