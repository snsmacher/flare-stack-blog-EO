/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_ReadingInputs */

const zh_editor_video_reading = /** @type {(inputs: Editor_Video_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在读取…`)
};

const en_editor_video_reading = /** @type {(inputs: Editor_Video_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reading…`)
};

/**
* | output |
* | --- |
* | "Reading…" |
*
* @param {Editor_Video_ReadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_reading = /** @type {((inputs?: Editor_Video_ReadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_ReadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_reading(inputs)
	return zh_editor_video_reading(inputs)
});