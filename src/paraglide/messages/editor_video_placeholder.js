/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_PlaceholderInputs */

const zh_editor_video_placeholder = /** @type {(inputs: Editor_Video_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`粘贴视频链接、视频直链或嵌入代码`)
};

const en_editor_video_placeholder = /** @type {(inputs: Editor_Video_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste a video link, direct video address or embed code`)
};

/**
* | output |
* | --- |
* | "Paste a video link, direct video address or embed code" |
*
* @param {Editor_Video_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_placeholder = /** @type {((inputs?: Editor_Video_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_placeholder(inputs)
	return zh_editor_video_placeholder(inputs)
});