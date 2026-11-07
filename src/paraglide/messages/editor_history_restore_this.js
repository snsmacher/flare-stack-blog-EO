/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Restore_ThisInputs */

const zh_editor_history_restore_this = /** @type {(inputs: Editor_History_Restore_ThisInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恢复此版本`)
};

const en_editor_history_restore_this = /** @type {(inputs: Editor_History_Restore_ThisInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restore this version`)
};

/**
* | output |
* | --- |
* | "Restore this version" |
*
* @param {Editor_History_Restore_ThisInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_restore_this = /** @type {((inputs?: Editor_History_Restore_ThisInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Restore_ThisInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_restore_this(inputs)
	return zh_editor_history_restore_this(inputs)
});