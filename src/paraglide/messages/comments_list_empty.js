/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_List_EmptyInputs */

const zh_comments_list_empty = /** @type {(inputs: Comments_List_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有评论，来发表第一条观点吧`)
};

const en_comments_list_empty = /** @type {(inputs: Comments_List_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No comments yet. Be the first to share your thoughts!`)
};

/**
* | output |
* | --- |
* | "No comments yet. Be the first to share your thoughts!" |
*
* @param {Comments_List_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_list_empty = /** @type {((inputs?: Comments_List_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_List_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_list_empty(inputs)
	return zh_comments_list_empty(inputs)
});