/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Theme_SystemInputs */

const zh_theme_system = /** @type {(inputs: Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`跟随系统`)
};

const en_theme_system = /** @type {(inputs: Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

/**
* | output |
* | --- |
* | "System" |
*
* @param {Theme_SystemInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const theme_system = /** @type {((inputs?: Theme_SystemInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Theme_SystemInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_theme_system(inputs)
	return zh_theme_system(inputs)
});