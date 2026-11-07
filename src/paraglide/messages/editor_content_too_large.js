/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ limit: NonNullable<unknown> }} Editor_Content_Too_LargeInputs */

const zh_editor_content_too_large = /** @type {(inputs: Editor_Content_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`保存失败：正文超出单篇约 ${i?.limit} KB 的上限。请精简内容或拆分为多篇文章。`)
};

const en_editor_content_too_large = /** @type {(inputs: Editor_Content_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Could not save: the post body is over the roughly ${i?.limit} KB a post can hold. Shorten it or split it into several posts.`)
};

/**
* | output |
* | --- |
* | "Could not save: the post body is over the roughly {limit} KB a post can hold. Shorten it or split it into several posts." |
*
* @param {Editor_Content_Too_LargeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_content_too_large = /** @type {((inputs: Editor_Content_Too_LargeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Content_Too_LargeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_content_too_large(inputs)
	return zh_editor_content_too_large(inputs)
});