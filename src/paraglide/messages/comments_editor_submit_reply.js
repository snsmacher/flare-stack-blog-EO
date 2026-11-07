/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Editor_Submit_ReplyInputs */

const zh_comments_editor_submit_reply = /** @type {(inputs: Comments_Editor_Submit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发表回复`)
};

const en_comments_editor_submit_reply = /** @type {(inputs: Comments_Editor_Submit_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post Reply`)
};

/**
* | output |
* | --- |
* | "Post Reply" |
*
* @param {Comments_Editor_Submit_ReplyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_editor_submit_reply = /** @type {((inputs?: Comments_Editor_Submit_ReplyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Editor_Submit_ReplyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_editor_submit_reply(inputs)
	return zh_comments_editor_submit_reply(inputs)
});