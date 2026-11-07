/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Expand_AllInputs */

const zh_common_expand_all = /** @type {(inputs: Common_Expand_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`展开全部`)
};

const en_common_expand_all = /** @type {(inputs: Common_Expand_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expand all`)
};

/**
* | output |
* | --- |
* | "Expand all" |
*
* @param {Common_Expand_AllInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const common_expand_all = /** @type {((inputs?: Common_Expand_AllInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Expand_AllInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_expand_all(inputs)
	return zh_common_expand_all(inputs)
});