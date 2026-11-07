/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Restore_HintInputs */

const zh_editor_history_restore_hint = /** @type {(inputs: Editor_History_Restore_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恢复仅影响草稿，已发布页面在重新发布后才会更新。`)
};

const en_editor_history_restore_hint = /** @type {(inputs: Editor_History_Restore_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restoring only affects the draft; the public page updates when you publish.`)
};

/**
* | output |
* | --- |
* | "Restoring only affects the draft; the public page updates when you publish." |
*
* @param {Editor_History_Restore_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_restore_hint = /** @type {((inputs?: Editor_History_Restore_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Restore_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_restore_hint(inputs)
	return zh_editor_history_restore_hint(inputs)
});