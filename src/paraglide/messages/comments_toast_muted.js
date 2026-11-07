/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Toast_MutedInputs */

const zh_comments_toast_muted = /** @type {(inputs: Comments_Toast_MutedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已被禁言，不能发表评论`)
};

const en_comments_toast_muted = /** @type {(inputs: Comments_Toast_MutedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You are muted and cannot comment.`)
};

/**
* | output |
* | --- |
* | "You are muted and cannot comment." |
*
* @param {Comments_Toast_MutedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_toast_muted = /** @type {((inputs?: Comments_Toast_MutedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Toast_MutedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_toast_muted(inputs)
	return zh_comments_toast_muted(inputs)
});