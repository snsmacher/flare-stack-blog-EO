/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Header_ProcessingInputs */

const zh_editor_header_processing = /** @type {(inputs: Editor_Header_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`处理中...`)
};

const en_editor_header_processing = /** @type {(inputs: Editor_Header_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processing...`)
};

/**
* | output |
* | --- |
* | "Processing..." |
*
* @param {Editor_Header_ProcessingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_header_processing = /** @type {((inputs?: Editor_Header_ProcessingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Header_ProcessingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_header_processing(inputs)
	return zh_editor_header_processing(inputs)
});