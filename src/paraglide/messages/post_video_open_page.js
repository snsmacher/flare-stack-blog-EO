/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_Video_Open_PageInputs */

const zh_post_video_open_page = /** @type {(inputs: Post_Video_Open_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开视频页面`)
};

const en_post_video_open_page = /** @type {(inputs: Post_Video_Open_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open video page`)
};

/**
* | output |
* | --- |
* | "Open video page" |
*
* @param {Post_Video_Open_PageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_video_open_page = /** @type {((inputs?: Post_Video_Open_PageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Video_Open_PageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_video_open_page(inputs)
	return zh_post_video_open_page(inputs)
});