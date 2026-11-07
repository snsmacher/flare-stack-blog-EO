/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_EditInputs */

const zh_editor_video_edit = /** @type {(inputs: Editor_Video_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修改视频`)
};

const en_editor_video_edit = /** @type {(inputs: Editor_Video_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit video`)
};

/**
* | output |
* | --- |
* | "Edit video" |
*
* @param {Editor_Video_EditInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_edit = /** @type {((inputs?: Editor_Video_EditInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_EditInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_edit(inputs)
	return zh_editor_video_edit(inputs)
});