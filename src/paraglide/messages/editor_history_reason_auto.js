/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Reason_AutoInputs */

const zh_editor_history_reason_auto = /** @type {(inputs: Editor_History_Reason_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`旧版自动保存`)
};

const en_editor_history_reason_auto = /** @type {(inputs: Editor_History_Reason_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Earlier autosave`)
};

/**
* | output |
* | --- |
* | "Earlier autosave" |
*
* @param {Editor_History_Reason_AutoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_reason_auto = /** @type {((inputs?: Editor_History_Reason_AutoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Reason_AutoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_reason_auto(inputs)
	return zh_editor_history_reason_auto(inputs)
});