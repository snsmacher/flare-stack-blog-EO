/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_Src_Not_FileInputs */

const zh_editor_video_src_not_file = /** @type {(inputs: Editor_Video_Src_Not_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该地址不是视频文件`)
};

const en_editor_video_src_not_file = /** @type {(inputs: Editor_Video_Src_Not_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This address is not a video file`)
};

/**
* | output |
* | --- |
* | "This address is not a video file" |
*
* @param {Editor_Video_Src_Not_FileInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_src_not_file = /** @type {((inputs?: Editor_Video_Src_Not_FileInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_Src_Not_FileInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_src_not_file(inputs)
	return zh_editor_video_src_not_file(inputs)
});