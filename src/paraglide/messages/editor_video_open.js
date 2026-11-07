/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_OpenInputs */

const zh_editor_video_open = /** @type {(inputs: Editor_Video_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开原视频`)
};

const en_editor_video_open = /** @type {(inputs: Editor_Video_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open original`)
};

/**
* | output |
* | --- |
* | "Open original" |
*
* @param {Editor_Video_OpenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_open = /** @type {((inputs?: Editor_Video_OpenInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_OpenInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_open(inputs)
	return zh_editor_video_open(inputs)
});