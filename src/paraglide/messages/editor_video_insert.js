/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_InsertInputs */

const zh_editor_video_insert = /** @type {(inputs: Editor_Video_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`插入视频`)
};

const en_editor_video_insert = /** @type {(inputs: Editor_Video_InsertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insert video`)
};

/**
* | output |
* | --- |
* | "Insert video" |
*
* @param {Editor_Video_InsertInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_insert = /** @type {((inputs?: Editor_Video_InsertInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_InsertInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_insert(inputs)
	return zh_editor_video_insert(inputs)
});