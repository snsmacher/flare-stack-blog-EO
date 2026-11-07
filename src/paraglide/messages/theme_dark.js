/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Theme_DarkInputs */

const zh_theme_dark = /** @type {(inputs: Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`深色`)
};

const en_theme_dark = /** @type {(inputs: Theme_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dark`)
};

/**
* | output |
* | --- |
* | "Dark" |
*
* @param {Theme_DarkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const theme_dark = /** @type {((inputs?: Theme_DarkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Theme_DarkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_theme_dark(inputs)
	return zh_theme_dark(inputs)
});