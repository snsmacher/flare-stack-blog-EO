/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Discard_Confirm_TitleInputs */

const zh_editor_discard_confirm_title = /** @type {(inputs: Editor_Discard_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`放弃修改`)
};

const en_editor_discard_confirm_title = /** @type {(inputs: Editor_Discard_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discard changes`)
};

/**
* | output |
* | --- |
* | "Discard changes" |
*
* @param {Editor_Discard_Confirm_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_discard_confirm_title = /** @type {((inputs?: Editor_Discard_Confirm_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Discard_Confirm_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_discard_confirm_title(inputs)
	return zh_editor_discard_confirm_title(inputs)
});