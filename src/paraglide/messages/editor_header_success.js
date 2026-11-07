/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Header_SuccessInputs */

const zh_editor_header_success = /** @type {(inputs: Editor_Header_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成功`)
};

const en_editor_header_success = /** @type {(inputs: Editor_Header_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Success`)
};

/**
* | output |
* | --- |
* | "Success" |
*
* @param {Editor_Header_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_header_success = /** @type {((inputs?: Editor_Header_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Header_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_header_success(inputs)
	return zh_editor_header_success(inputs)
});