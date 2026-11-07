/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_Direct_UnsupportedInputs */

const zh_editor_video_direct_unsupported = /** @type {(inputs: Editor_Video_Direct_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该地址既不是视频文件，也不是网页，无法作为视频直链`)
};

const en_editor_video_direct_unsupported = /** @type {(inputs: Editor_Video_Direct_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This address is neither a video file nor a web page, so it cannot be a direct video.`)
};

/**
* | output |
* | --- |
* | "This address is neither a video file nor a web page, so it cannot be a direct video." |
*
* @param {Editor_Video_Direct_UnsupportedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_direct_unsupported = /** @type {((inputs?: Editor_Video_Direct_UnsupportedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_Direct_UnsupportedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_direct_unsupported(inputs)
	return zh_editor_video_direct_unsupported(inputs)
});