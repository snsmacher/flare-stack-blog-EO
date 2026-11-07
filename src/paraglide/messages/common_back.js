/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_BackInputs */

const zh_common_back = /** @type {(inputs: Common_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回`)
};

const en_common_back = /** @type {(inputs: Common_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back`)
};

/**
* | output |
* | --- |
* | "Back" |
*
* @param {Common_BackInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const common_back = /** @type {((inputs?: Common_BackInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_BackInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_back(inputs)
	return zh_common_back(inputs)
});