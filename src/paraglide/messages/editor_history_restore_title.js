/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Restore_TitleInputs */

const zh_editor_history_restore_title = /** @type {(inputs: Editor_History_Restore_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恢复此版本`)
};

const en_editor_history_restore_title = /** @type {(inputs: Editor_History_Restore_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restore this version`)
};

/**
* | output |
* | --- |
* | "Restore this version" |
*
* @param {Editor_History_Restore_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_restore_title = /** @type {((inputs?: Editor_History_Restore_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Restore_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_restore_title(inputs)
	return zh_editor_history_restore_title(inputs)
});