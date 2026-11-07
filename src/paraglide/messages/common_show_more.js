/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Show_MoreInputs */

const zh_common_show_more = /** @type {(inputs: Common_Show_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示更多`)
};

const en_common_show_more = /** @type {(inputs: Common_Show_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show more`)
};

/**
* | output |
* | --- |
* | "Show more" |
*
* @param {Common_Show_MoreInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const common_show_more = /** @type {((inputs?: Common_Show_MoreInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Show_MoreInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_show_more(inputs)
	return zh_common_show_more(inputs)
});