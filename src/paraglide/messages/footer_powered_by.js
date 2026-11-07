/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Footer_Powered_ByInputs */

const zh_footer_powered_by = /** @type {(inputs: Footer_Powered_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powered by`)
};

const en_footer_powered_by = /** @type {(inputs: Footer_Powered_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powered by`)
};

/**
* | output |
* | --- |
* | "Powered by" |
*
* @param {Footer_Powered_ByInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const footer_powered_by = /** @type {((inputs?: Footer_Powered_ByInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Footer_Powered_ByInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_footer_powered_by(inputs)
	return zh_footer_powered_by(inputs)
});