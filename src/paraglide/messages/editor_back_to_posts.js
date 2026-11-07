/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Back_To_PostsInputs */

const zh_editor_back_to_posts = /** @type {(inputs: Editor_Back_To_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回文章`)
};

const en_editor_back_to_posts = /** @type {(inputs: Editor_Back_To_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to posts`)
};

/**
* | output |
* | --- |
* | "Back to posts" |
*
* @param {Editor_Back_To_PostsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_back_to_posts = /** @type {((inputs?: Editor_Back_To_PostsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Back_To_PostsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_back_to_posts(inputs)
	return zh_editor_back_to_posts(inputs)
});