/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_Src_ConfirmedInputs */

const zh_editor_video_src_confirmed = /** @type {(inputs: Editor_Video_Src_ConfirmedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`播放地址已确认是视频文件`)
};

const en_editor_video_src_confirmed = /** @type {(inputs: Editor_Video_Src_ConfirmedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The playback address is confirmed to be a video file.`)
};

/**
* | output |
* | --- |
* | "The playback address is confirmed to be a video file." |
*
* @param {Editor_Video_Src_ConfirmedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_src_confirmed = /** @type {((inputs?: Editor_Video_Src_ConfirmedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_Src_ConfirmedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_src_confirmed(inputs)
	return zh_editor_video_src_confirmed(inputs)
});