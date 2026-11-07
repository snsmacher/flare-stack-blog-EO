/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_Src_HintInputs */

const zh_editor_video_src_hint = /** @type {(inputs: Editor_Video_Src_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`视频文件的 https 地址，填写后将替代来源网页中的视频`)
};

const en_editor_video_src_hint = /** @type {(inputs: Editor_Video_Src_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The https address of a video file. It replaces the video on the source page.`)
};

/**
* | output |
* | --- |
* | "The https address of a video file. It replaces the video on the source page." |
*
* @param {Editor_Video_Src_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_src_hint = /** @type {((inputs?: Editor_Video_Src_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_Src_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_src_hint(inputs)
	return zh_editor_video_src_hint(inputs)
});