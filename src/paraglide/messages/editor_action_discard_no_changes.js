/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Action_Discard_No_ChangesInputs */

const zh_editor_action_discard_no_changes = /** @type {(inputs: Editor_Action_Discard_No_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草稿与已发布的版本一致，没有可放弃的修改。`)
};

const en_editor_action_discard_no_changes = /** @type {(inputs: Editor_Action_Discard_No_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The draft already matches the published version, so there is nothing to discard.`)
};

/**
* | output |
* | --- |
* | "The draft already matches the published version, so there is nothing to discard." |
*
* @param {Editor_Action_Discard_No_ChangesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_action_discard_no_changes = /** @type {((inputs?: Editor_Action_Discard_No_ChangesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Action_Discard_No_ChangesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_action_discard_no_changes(inputs)
	return zh_editor_action_discard_no_changes(inputs)
});