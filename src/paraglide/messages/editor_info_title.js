/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Info_TitleInputs */

const zh_editor_info_title = /** @type {(inputs: Editor_Info_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章信息`)
};

const en_editor_info_title = /** @type {(inputs: Editor_Info_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post details`)
};

/**
* | output |
* | --- |
* | "Post details" |
*
* @param {Editor_Info_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_info_title = /** @type {((inputs?: Editor_Info_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Info_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_info_title(inputs)
	return zh_editor_info_title(inputs)
});