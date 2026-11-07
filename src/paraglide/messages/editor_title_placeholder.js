/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Title_PlaceholderInputs */

const zh_editor_title_placeholder = /** @type {(inputs: Editor_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在此输入文章标题...`)
};

const en_editor_title_placeholder = /** @type {(inputs: Editor_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter post title here...`)
};

/**
* | output |
* | --- |
* | "Enter post title here..." |
*
* @param {Editor_Title_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_title_placeholder = /** @type {((inputs?: Editor_Title_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Title_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_title_placeholder(inputs)
	return zh_editor_title_placeholder(inputs)
});