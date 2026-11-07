/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_Name_LabelInputs */

const zh_settings_api_keys_name_label = /** @type {(inputs: Settings_Api_Keys_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称`)
};

const en_settings_api_keys_name_label = /** @type {(inputs: Settings_Api_Keys_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

/**
* | output |
* | --- |
* | "Name" |
*
* @param {Settings_Api_Keys_Name_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_name_label = /** @type {((inputs?: Settings_Api_Keys_Name_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_Name_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_name_label(inputs)
	return zh_settings_api_keys_name_label(inputs)
});