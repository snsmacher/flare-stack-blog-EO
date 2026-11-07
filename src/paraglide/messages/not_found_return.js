/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Not_Found_ReturnInputs */

const zh_not_found_return = /** @type {(inputs: Not_Found_ReturnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回首页`)
};

const en_not_found_return = /** @type {(inputs: Not_Found_ReturnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to Home`)
};

/**
* | output |
* | --- |
* | "Back to Home" |
*
* @param {Not_Found_ReturnInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const not_found_return = /** @type {((inputs?: Not_Found_ReturnInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Not_Found_ReturnInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_not_found_return(inputs)
	return zh_not_found_return(inputs)
});