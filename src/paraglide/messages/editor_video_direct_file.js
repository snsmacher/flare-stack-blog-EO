/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_Direct_FileInputs */

const zh_editor_video_direct_file = /** @type {(inputs: Editor_Video_Direct_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已识别：视频直链（视频文件）`)
};

const en_editor_video_direct_file = /** @type {(inputs: Editor_Video_Direct_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Found: direct video (video file)`)
};

/**
* | output |
* | --- |
* | "Found: direct video (video file)" |
*
* @param {Editor_Video_Direct_FileInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_direct_file = /** @type {((inputs?: Editor_Video_Direct_FileInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_Direct_FileInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_direct_file(inputs)
	return zh_editor_video_direct_file(inputs)
});