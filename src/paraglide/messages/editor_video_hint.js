/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_HintInputs */

const zh_editor_video_hint = /** @type {(inputs: Editor_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支持哔哩哔哩和 YouTube 的视频链接或嵌入代码，以及 https 开头的视频直链（视频文件，或含有视频的网页）`)
};

const en_editor_video_hint = /** @type {(inputs: Editor_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Works with Bilibili and YouTube links or embed codes, and https addresses of a video file or of a page that has a video`)
};

/**
* | output |
* | --- |
* | "Works with Bilibili and YouTube links or embed codes, and https addresses of a video file or of a page that has a video" |
*
* @param {Editor_Video_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_hint = /** @type {((inputs?: Editor_Video_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_hint(inputs)
	return zh_editor_video_hint(inputs)
});