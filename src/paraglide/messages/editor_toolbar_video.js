/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toolbar_VideoInputs */

const zh_editor_toolbar_video = /** @type {(inputs: Editor_Toolbar_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`插入视频`)
};

const en_editor_toolbar_video = /** @type {(inputs: Editor_Toolbar_VideoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insert video`)
};

/**
* | output |
* | --- |
* | "Insert video" |
*
* @param {Editor_Toolbar_VideoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toolbar_video = /** @type {((inputs?: Editor_Toolbar_VideoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toolbar_VideoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toolbar_video(inputs)
	return zh_editor_toolbar_video(inputs)
});