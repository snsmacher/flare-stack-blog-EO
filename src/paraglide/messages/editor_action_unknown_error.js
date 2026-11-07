/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Action_Unknown_ErrorInputs */

const zh_editor_action_unknown_error = /** @type {(inputs: Editor_Action_Unknown_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知错误`)
};

const en_editor_action_unknown_error = /** @type {(inputs: Editor_Action_Unknown_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unknown error`)
};

/**
* | output |
* | --- |
* | "Unknown error" |
*
* @param {Editor_Action_Unknown_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_action_unknown_error = /** @type {((inputs?: Editor_Action_Unknown_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Action_Unknown_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_action_unknown_error(inputs)
	return zh_editor_action_unknown_error(inputs)
});