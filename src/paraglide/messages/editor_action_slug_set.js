/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Action_Slug_SetInputs */

const zh_editor_action_slug_set = /** @type {(inputs: Editor_Action_Slug_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL slug 已设置`)
};

const en_editor_action_slug_set = /** @type {(inputs: Editor_Action_Slug_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL Slug Set`)
};

/**
* | output |
* | --- |
* | "URL Slug Set" |
*
* @param {Editor_Action_Slug_SetInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_action_slug_set = /** @type {((inputs?: Editor_Action_Slug_SetInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Action_Slug_SetInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_action_slug_set(inputs)
	return zh_editor_action_slug_set(inputs)
});