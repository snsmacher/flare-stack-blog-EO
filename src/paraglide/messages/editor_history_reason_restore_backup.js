/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Reason_Restore_BackupInputs */

const zh_editor_history_reason_restore_backup = /** @type {(inputs: Editor_History_Reason_Restore_BackupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恢复或放弃修改前的草稿`)
};

const en_editor_history_reason_restore_backup = /** @type {(inputs: Editor_History_Reason_Restore_BackupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Before restore or discard`)
};

/**
* | output |
* | --- |
* | "Before restore or discard" |
*
* @param {Editor_History_Reason_Restore_BackupInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_reason_restore_backup = /** @type {((inputs?: Editor_History_Reason_Restore_BackupInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Reason_Restore_BackupInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_reason_restore_backup(inputs)
	return zh_editor_history_reason_restore_backup(inputs)
});