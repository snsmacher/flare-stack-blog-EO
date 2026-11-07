/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_OptionalInputs */

const zh_editor_video_optional = /** @type {(inputs: Editor_Video_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可选`)
};

const en_editor_video_optional = /** @type {(inputs: Editor_Video_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optional`)
};

/**
* | output |
* | --- |
* | "Optional" |
*
* @param {Editor_Video_OptionalInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_optional = /** @type {((inputs?: Editor_Video_OptionalInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_OptionalInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_optional(inputs)
	return zh_editor_video_optional(inputs)
});