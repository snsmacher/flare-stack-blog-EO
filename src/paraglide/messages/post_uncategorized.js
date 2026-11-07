/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_UncategorizedInputs */

const zh_post_uncategorized = /** @type {(inputs: Post_UncategorizedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未分类`)
};

const en_post_uncategorized = /** @type {(inputs: Post_UncategorizedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uncategorized`)
};

/**
* | output |
* | --- |
* | "Uncategorized" |
*
* @param {Post_UncategorizedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_uncategorized = /** @type {((inputs?: Post_UncategorizedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_UncategorizedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_uncategorized(inputs)
	return zh_post_uncategorized(inputs)
});