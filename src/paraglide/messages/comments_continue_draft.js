/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Continue_DraftInputs */

const zh_comments_continue_draft = /** @type {(inputs: Comments_Continue_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`继续编辑评论草稿…`)
};

const en_comments_continue_draft = /** @type {(inputs: Comments_Continue_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue your comment draft…`)
};

/**
* | output |
* | --- |
* | "Continue your comment draft…" |
*
* @param {Comments_Continue_DraftInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_continue_draft = /** @type {((inputs?: Comments_Continue_DraftInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Continue_DraftInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_continue_draft(inputs)
	return zh_comments_continue_draft(inputs)
});