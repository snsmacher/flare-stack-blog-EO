/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_Direct_Page_EmptyInputs */

const zh_editor_video_direct_page_empty = /** @type {(inputs: Editor_Video_Direct_Page_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该网页中没有可直接播放的视频，请填写播放地址`)
};

const en_editor_video_direct_page_empty = /** @type {(inputs: Editor_Video_Direct_Page_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This page has no video that can play directly. Enter a playback address.`)
};

/**
* | output |
* | --- |
* | "This page has no video that can play directly. Enter a playback address." |
*
* @param {Editor_Video_Direct_Page_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_direct_page_empty = /** @type {((inputs?: Editor_Video_Direct_Page_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_Direct_Page_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_direct_page_empty(inputs)
	return zh_editor_video_direct_page_empty(inputs)
});