/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Load_MoreInputs */

const zh_comments_load_more = /** @type {(inputs: Comments_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载更多评论`)
};

const en_comments_load_more = /** @type {(inputs: Comments_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Load more comments`)
};

/**
* | output |
* | --- |
* | "Load more comments" |
*
* @param {Comments_Load_MoreInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_load_more = /** @type {((inputs?: Comments_Load_MoreInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Load_MoreInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_load_more(inputs)
	return zh_comments_load_more(inputs)
});