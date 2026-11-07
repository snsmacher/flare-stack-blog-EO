/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Theme_LightInputs */

const zh_theme_light = /** @type {(inputs: Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浅色`)
};

const en_theme_light = /** @type {(inputs: Theme_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Light`)
};

/**
* | output |
* | --- |
* | "Light" |
*
* @param {Theme_LightInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const theme_light = /** @type {((inputs?: Theme_LightInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Theme_LightInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_theme_light(inputs)
	return zh_theme_light(inputs)
});