/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_HomeInputs */

const zh_nav_home = /** @type {(inputs: Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主页`)
};

const en_nav_home = /** @type {(inputs: Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Home`)
};

/**
* | output |
* | --- |
* | "Home" |
*
* @param {Nav_HomeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const nav_home = /** @type {((inputs?: Nav_HomeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_HomeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_home(inputs)
	return zh_nav_home(inputs)
});