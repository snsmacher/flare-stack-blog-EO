/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_InputInputs */

const zh_editor_video_input = /** @type {(inputs: Editor_Video_InputInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`视频链接、视频地址或嵌入代码`)
};

const en_editor_video_input = /** @type {(inputs: Editor_Video_InputInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video link, video address or embed code`)
};

/**
* | output |
* | --- |
* | "Video link, video address or embed code" |
*
* @param {Editor_Video_InputInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_input = /** @type {((inputs?: Editor_Video_InputInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_InputInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_input(inputs)
	return zh_editor_video_input(inputs)
});