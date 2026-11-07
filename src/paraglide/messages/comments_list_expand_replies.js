/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Comments_List_Expand_RepliesInputs */

const zh_comments_list_expand_replies = /** @type {(inputs: Comments_List_Expand_RepliesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`展开 ${i?.count} 条回复`)
};

const en_comments_list_expand_replies = /** @type {(inputs: Comments_List_Expand_RepliesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Show ${i?.count} replies`)
};

/**
* | output |
* | --- |
* | "Show {count} replies" |
*
* @param {Comments_List_Expand_RepliesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_list_expand_replies = /** @type {((inputs: Comments_List_Expand_RepliesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_List_Expand_RepliesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_list_expand_replies(inputs)
	return zh_comments_list_expand_replies(inputs)
});