/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Action_Slug_ErrorInputs */

const zh_editor_action_slug_error = /** @type {(inputs: Editor_Action_Slug_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug生成失败`)
};

const en_editor_action_slug_error = /** @type {(inputs: Editor_Action_Slug_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to generate slug`)
};

/**
* | output |
* | --- |
* | "Failed to generate slug" |
*
* @param {Editor_Action_Slug_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_action_slug_error = /** @type {((inputs?: Editor_Action_Slug_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Action_Slug_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_action_slug_error(inputs)
	return zh_editor_action_slug_error(inputs)
});