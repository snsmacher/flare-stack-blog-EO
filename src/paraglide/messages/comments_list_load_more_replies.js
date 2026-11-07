/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_List_Load_More_RepliesInputs */

const zh_comments_list_load_more_replies = /** @type {(inputs: Comments_List_Load_More_RepliesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载更多回复`)
};

const en_comments_list_load_more_replies = /** @type {(inputs: Comments_List_Load_More_RepliesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Load more replies`)
};

/**
* | output |
* | --- |
* | "Load more replies" |
*
* @param {Comments_List_Load_More_RepliesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_list_load_more_replies = /** @type {((inputs?: Comments_List_Load_More_RepliesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_List_Load_More_RepliesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_list_load_more_replies(inputs)
	return zh_comments_list_load_more_replies(inputs)
});