/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Settings_Design_Key_CountInputs */

const zh_settings_design_key_count = /** @type {(inputs: Settings_Design_Key_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`共 ${i?.count} 个密钥`)
};

const en_settings_design_key_count = /** @type {(inputs: Settings_Design_Key_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} keys`)
};

/**
* | output |
* | --- |
* | "{count} keys" |
*
* @param {Settings_Design_Key_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_key_count = /** @type {((inputs: Settings_Design_Key_CountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Key_CountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_key_count(inputs)
	return zh_settings_design_key_count(inputs)
});