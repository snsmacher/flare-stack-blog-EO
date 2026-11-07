/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Video_UpdateInputs */

const zh_editor_video_update = /** @type {(inputs: Editor_Video_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新`)
};

const en_editor_video_update = /** @type {(inputs: Editor_Video_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update`)
};

/**
* | output |
* | --- |
* | "Update" |
*
* @param {Editor_Video_UpdateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_update = /** @type {((inputs?: Editor_Video_UpdateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_UpdateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_update(inputs)
	return zh_editor_video_update(inputs)
});