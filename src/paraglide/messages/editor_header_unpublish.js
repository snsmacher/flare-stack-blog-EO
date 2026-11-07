/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Header_UnpublishInputs */

const zh_editor_header_unpublish = /** @type {(inputs: Editor_Header_UnpublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消发布`)
};

const en_editor_header_unpublish = /** @type {(inputs: Editor_Header_UnpublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unpublish`)
};

/**
* | output |
* | --- |
* | "Unpublish" |
*
* @param {Editor_Header_UnpublishInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_header_unpublish = /** @type {((inputs?: Editor_Header_UnpublishInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Header_UnpublishInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_header_unpublish(inputs)
	return zh_editor_header_unpublish(inputs)
});