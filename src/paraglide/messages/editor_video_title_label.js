/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_Title_LabelInputs */

const zh_editor_video_title_label = /** @type {(inputs: Editor_Video_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题`)
};

const en_editor_video_title_label = /** @type {(inputs: Editor_Video_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Title`)
};

/**
* | output |
* | --- |
* | "Title" |
*
* @param {Editor_Video_Title_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_title_label = /** @type {((inputs?: Editor_Video_Title_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_Title_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_title_label(inputs)
	return zh_editor_video_title_label(inputs)
});