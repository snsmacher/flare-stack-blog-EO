/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Not_Found_DescInputs */

const zh_not_found_desc = /** @type {(inputs: Not_Found_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这个页面可能已被移走，或链接地址有误。`)
};

const en_not_found_desc = /** @type {(inputs: Not_Found_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This page may have moved, or the link may be incorrect.`)
};

/**
* | output |
* | --- |
* | "This page may have moved, or the link may be incorrect." |
*
* @param {Not_Found_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const not_found_desc = /** @type {((inputs?: Not_Found_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Not_Found_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_not_found_desc(inputs)
	return zh_not_found_desc(inputs)
});