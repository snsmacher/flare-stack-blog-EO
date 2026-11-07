/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_Src_LabelInputs */

const zh_editor_video_src_label = /** @type {(inputs: Editor_Video_Src_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`播放地址`)
};

const en_editor_video_src_label = /** @type {(inputs: Editor_Video_Src_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Playback address`)
};

/**
* | output |
* | --- |
* | "Playback address" |
*
* @param {Editor_Video_Src_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_src_label = /** @type {((inputs?: Editor_Video_Src_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_Src_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_src_label(inputs)
	return zh_editor_video_src_label(inputs)
});