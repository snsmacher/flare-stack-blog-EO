/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_UnsupportedInputs */

const zh_editor_video_unsupported = /** @type {(inputs: Editor_Video_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法识别，请粘贴哔哩哔哩或 YouTube 的链接，或 https 开头的视频地址`)
};

const en_editor_video_unsupported = /** @type {(inputs: Editor_Video_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not recognized. Paste a Bilibili or YouTube link, or an address starting with https.`)
};

/**
* | output |
* | --- |
* | "Not recognized. Paste a Bilibili or YouTube link, or an address starting with https." |
*
* @param {Editor_Video_UnsupportedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_unsupported = /** @type {((inputs?: Editor_Video_UnsupportedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_UnsupportedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_unsupported(inputs)
	return zh_editor_video_unsupported(inputs)
});