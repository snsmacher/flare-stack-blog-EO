/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Action_Discard_FailedInputs */

const zh_editor_action_discard_failed = /** @type {(inputs: Editor_Action_Discard_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`放弃修改失败，请重试。`)
};

const en_editor_action_discard_failed = /** @type {(inputs: Editor_Action_Discard_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discarding did not finish. Try again.`)
};

/**
* | output |
* | --- |
* | "Discarding did not finish. Try again." |
*
* @param {Editor_Action_Discard_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_action_discard_failed = /** @type {((inputs?: Editor_Action_Discard_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Action_Discard_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_action_discard_failed(inputs)
	return zh_editor_action_discard_failed(inputs)
});