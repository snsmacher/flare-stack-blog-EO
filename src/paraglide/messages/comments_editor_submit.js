/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Editor_SubmitInputs */

const zh_comments_editor_submit = /** @type {(inputs: Comments_Editor_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发表评论`)
};

const en_comments_editor_submit = /** @type {(inputs: Comments_Editor_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post Comment`)
};

/**
* | output |
* | --- |
* | "Post Comment" |
*
* @param {Comments_Editor_SubmitInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_editor_submit = /** @type {((inputs?: Comments_Editor_SubmitInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Editor_SubmitInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_editor_submit(inputs)
	return zh_comments_editor_submit(inputs)
});