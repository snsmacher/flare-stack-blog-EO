/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Header_RepublishInputs */

const zh_editor_header_republish = /** @type {(inputs: Editor_Header_RepublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新发布`)
};

const en_editor_header_republish = /** @type {(inputs: Editor_Header_RepublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Republish`)
};

/**
* | output |
* | --- |
* | "Republish" |
*
* @param {Editor_Header_RepublishInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_header_republish = /** @type {((inputs?: Editor_Header_RepublishInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Header_RepublishInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_header_republish(inputs)
	return zh_editor_header_republish(inputs)
});