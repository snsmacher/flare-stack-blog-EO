/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_Cover_LabelInputs */

const zh_editor_video_cover_label = /** @type {(inputs: Editor_Video_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`封面地址`)
};

const en_editor_video_cover_label = /** @type {(inputs: Editor_Video_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cover address`)
};

/**
* | output |
* | --- |
* | "Cover address" |
*
* @param {Editor_Video_Cover_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_cover_label = /** @type {((inputs?: Editor_Video_Cover_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_Cover_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_cover_label(inputs)
	return zh_editor_video_cover_label(inputs)
});