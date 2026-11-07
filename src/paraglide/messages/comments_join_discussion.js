/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Join_DiscussionInputs */

const zh_comments_join_discussion = /** @type {(inputs: Comments_Join_DiscussionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后参与讨论`)
};

const en_comments_join_discussion = /** @type {(inputs: Comments_Join_DiscussionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in to join the discussion`)
};

/**
* | output |
* | --- |
* | "Sign in to join the discussion" |
*
* @param {Comments_Join_DiscussionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_join_discussion = /** @type {((inputs?: Comments_Join_DiscussionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Join_DiscussionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_join_discussion(inputs)
	return zh_comments_join_discussion(inputs)
});