/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Action_Publish_FailedInputs */

const zh_editor_action_publish_failed = /** @type {(inputs: Editor_Action_Publish_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布未完成，请再试一次。`)
};

const en_editor_action_publish_failed = /** @type {(inputs: Editor_Action_Publish_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing did not finish. Try again.`)
};

/**
* | output |
* | --- |
* | "Publishing did not finish. Try again." |
*
* @param {Editor_Action_Publish_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_action_publish_failed = /** @type {((inputs?: Editor_Action_Publish_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Action_Publish_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_action_publish_failed(inputs)
	return zh_editor_action_publish_failed(inputs)
});