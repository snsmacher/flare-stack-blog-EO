/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_Back_To_TopInputs */

const zh_post_back_to_top = /** @type {(inputs: Post_Back_To_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回顶部`)
};

const en_post_back_to_top = /** @type {(inputs: Post_Back_To_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to top`)
};

/**
* | output |
* | --- |
* | "Back to top" |
*
* @param {Post_Back_To_TopInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_back_to_top = /** @type {((inputs?: Post_Back_To_TopInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Back_To_TopInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_back_to_top(inputs)
	return zh_post_back_to_top(inputs)
});