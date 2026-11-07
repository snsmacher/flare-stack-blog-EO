/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_Src_ReadingInputs */

const zh_editor_video_src_reading = /** @type {(inputs: Editor_Video_Src_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在读取播放地址…`)
};

const en_editor_video_src_reading = /** @type {(inputs: Editor_Video_Src_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reading the playback address…`)
};

/**
* | output |
* | --- |
* | "Reading the playback address…" |
*
* @param {Editor_Video_Src_ReadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_src_reading = /** @type {((inputs?: Editor_Video_Src_ReadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_Src_ReadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_src_reading(inputs)
	return zh_editor_video_src_reading(inputs)
});