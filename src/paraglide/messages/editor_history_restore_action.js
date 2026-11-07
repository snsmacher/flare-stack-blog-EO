/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Restore_ActionInputs */

const zh_editor_history_restore_action = /** @type {(inputs: Editor_History_Restore_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恢复`)
};

const en_editor_history_restore_action = /** @type {(inputs: Editor_History_Restore_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restore`)
};

/**
* | output |
* | --- |
* | "Restore" |
*
* @param {Editor_History_Restore_ActionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_restore_action = /** @type {((inputs?: Editor_History_Restore_ActionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Restore_ActionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_restore_action(inputs)
	return zh_editor_history_restore_action(inputs)
});