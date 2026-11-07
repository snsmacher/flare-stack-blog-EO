/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Header_PublishInputs */

const zh_editor_header_publish = /** @type {(inputs: Editor_Header_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布`)
};

const en_editor_header_publish = /** @type {(inputs: Editor_Header_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish`)
};

/**
* | output |
* | --- |
* | "Publish" |
*
* @param {Editor_Header_PublishInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_header_publish = /** @type {((inputs?: Editor_Header_PublishInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Header_PublishInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_header_publish(inputs)
	return zh_editor_header_publish(inputs)
});