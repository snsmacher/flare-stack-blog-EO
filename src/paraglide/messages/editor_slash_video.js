/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Slash_VideoInputs */

const zh_editor_slash_video = /** @type {(inputs: Editor_Slash_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`视频`)
};

const en_editor_slash_video = /** @type {(inputs: Editor_Slash_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video`)
};

/**
* | output |
* | --- |
* | "Video" |
*
* @param {Editor_Slash_VideoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_slash_video = /** @type {((inputs?: Editor_Slash_VideoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Slash_VideoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_slash_video(inputs)
	return zh_editor_slash_video(inputs)
});