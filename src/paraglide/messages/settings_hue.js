/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_HueInputs */

const zh_settings_hue = /** @type {(inputs: Settings_HueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主色`)
};

const en_settings_hue = /** @type {(inputs: Settings_HueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accent colour`)
};

/**
* | output |
* | --- |
* | "Accent colour" |
*
* @param {Settings_HueInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_hue = /** @type {((inputs?: Settings_HueInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_HueInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_hue(inputs)
	return zh_settings_hue(inputs)
});