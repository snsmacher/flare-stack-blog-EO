/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Header_DiscardInputs */

const zh_editor_header_discard = /** @type {(inputs: Editor_Header_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`放弃修改`)
};

const en_editor_header_discard = /** @type {(inputs: Editor_Header_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discard changes`)
};

/**
* | output |
* | --- |
* | "Discard changes" |
*
* @param {Editor_Header_DiscardInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_header_discard = /** @type {((inputs?: Editor_Header_DiscardInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Header_DiscardInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_header_discard(inputs)
	return zh_editor_header_discard(inputs)
});