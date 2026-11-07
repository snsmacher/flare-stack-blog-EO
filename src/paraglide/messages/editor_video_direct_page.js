/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_Direct_PageInputs */

const zh_editor_video_direct_page = /** @type {(inputs: Editor_Video_Direct_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已读取来源网页，并找到其中的视频`)
};

const en_editor_video_direct_page = /** @type {(inputs: Editor_Video_Direct_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read the source page and found its video`)
};

/**
* | output |
* | --- |
* | "Read the source page and found its video" |
*
* @param {Editor_Video_Direct_PageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_direct_page = /** @type {((inputs?: Editor_Video_Direct_PageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_Direct_PageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_direct_page(inputs)
	return zh_editor_video_direct_page(inputs)
});