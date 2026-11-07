/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Editor_PlaceholderInputs */

const zh_comments_editor_placeholder = /** @type {(inputs: Comments_Editor_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`友善的评论是交流的起点...`)
};

const en_comments_editor_placeholder = /** @type {(inputs: Comments_Editor_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A friendly comment is the start of a good conversation...`)
};

/**
* | output |
* | --- |
* | "A friendly comment is the start of a good conversation..." |
*
* @param {Comments_Editor_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_editor_placeholder = /** @type {((inputs?: Comments_Editor_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Editor_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_editor_placeholder(inputs)
	return zh_comments_editor_placeholder(inputs)
});