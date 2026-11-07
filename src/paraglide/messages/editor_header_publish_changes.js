/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Header_Publish_ChangesInputs */

const zh_editor_header_publish_changes = /** @type {(inputs: Editor_Header_Publish_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布修改`)
};

const en_editor_header_publish_changes = /** @type {(inputs: Editor_Header_Publish_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish changes`)
};

/**
* | output |
* | --- |
* | "Publish changes" |
*
* @param {Editor_Header_Publish_ChangesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_header_publish_changes = /** @type {((inputs?: Editor_Header_Publish_ChangesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Header_Publish_ChangesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_header_publish_changes(inputs)
	return zh_editor_header_publish_changes(inputs)
});