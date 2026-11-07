/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Muted_MessageInputs */

const zh_comments_muted_message = /** @type {(inputs: Comments_Muted_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已被禁言，不能发表评论`)
};

const en_comments_muted_message = /** @type {(inputs: Comments_Muted_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You are muted and cannot comment.`)
};

/**
* | output |
* | --- |
* | "You are muted and cannot comment." |
*
* @param {Comments_Muted_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_muted_message = /** @type {((inputs?: Comments_Muted_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Muted_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_muted_message(inputs)
	return zh_comments_muted_message(inputs)
});