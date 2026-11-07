/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Info_DoneInputs */

const zh_editor_info_done = /** @type {(inputs: Editor_Info_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完成`)
};

const en_editor_info_done = /** @type {(inputs: Editor_Info_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Done`)
};

/**
* | output |
* | --- |
* | "Done" |
*
* @param {Editor_Info_DoneInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_info_done = /** @type {((inputs?: Editor_Info_DoneInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Info_DoneInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_info_done(inputs)
	return zh_editor_info_done(inputs)
});