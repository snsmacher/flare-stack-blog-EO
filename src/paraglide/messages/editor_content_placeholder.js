/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Content_PlaceholderInputs */

const zh_editor_content_placeholder = /** @type {(inputs: Editor_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始记录...`)
};

const en_editor_content_placeholder = /** @type {(inputs: Editor_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start writing...`)
};

/**
* | output |
* | --- |
* | "Start writing..." |
*
* @param {Editor_Content_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_content_placeholder = /** @type {((inputs?: Editor_Content_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Content_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_content_placeholder(inputs)
	return zh_editor_content_placeholder(inputs)
});