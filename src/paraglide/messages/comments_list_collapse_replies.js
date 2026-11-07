/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_List_Collapse_RepliesInputs */

const zh_comments_list_collapse_replies = /** @type {(inputs: Comments_List_Collapse_RepliesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收起回复`)
};

const en_comments_list_collapse_replies = /** @type {(inputs: Comments_List_Collapse_RepliesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide replies`)
};

/**
* | output |
* | --- |
* | "Hide replies" |
*
* @param {Comments_List_Collapse_RepliesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_list_collapse_replies = /** @type {((inputs?: Comments_List_Collapse_RepliesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_List_Collapse_RepliesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_list_collapse_replies(inputs)
	return zh_comments_list_collapse_replies(inputs)
});