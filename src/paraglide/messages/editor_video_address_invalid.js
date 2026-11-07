/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_Address_InvalidInputs */

const zh_editor_video_address_invalid = /** @type {(inputs: Editor_Video_Address_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`须为 https 开头的地址`)
};

const en_editor_video_address_invalid = /** @type {(inputs: Editor_Video_Address_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Must be an address starting with https`)
};

/**
* | output |
* | --- |
* | "Must be an address starting with https" |
*
* @param {Editor_Video_Address_InvalidInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_address_invalid = /** @type {((inputs?: Editor_Video_Address_InvalidInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_Address_InvalidInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_address_invalid(inputs)
	return zh_editor_video_address_invalid(inputs)
});