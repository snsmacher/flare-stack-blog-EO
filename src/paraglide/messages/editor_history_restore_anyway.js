/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Restore_AnywayInputs */

const zh_editor_history_restore_anyway = /** @type {(inputs: Editor_History_Restore_AnywayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仍要恢复`)
};

const en_editor_history_restore_anyway = /** @type {(inputs: Editor_History_Restore_AnywayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restore anyway`)
};

/**
* | output |
* | --- |
* | "Restore anyway" |
*
* @param {Editor_History_Restore_AnywayInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_restore_anyway = /** @type {((inputs?: Editor_History_Restore_AnywayInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Restore_AnywayInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_restore_anyway(inputs)
	return zh_editor_history_restore_anyway(inputs)
});