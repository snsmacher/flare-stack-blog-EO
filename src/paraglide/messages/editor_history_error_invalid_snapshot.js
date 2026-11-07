/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Error_Invalid_SnapshotInputs */

const zh_editor_history_error_invalid_snapshot = /** @type {(inputs: Editor_History_Error_Invalid_SnapshotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此历史版本无法恢复。`)
};

const en_editor_history_error_invalid_snapshot = /** @type {(inputs: Editor_History_Error_Invalid_SnapshotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This version cannot be restored.`)
};

/**
* | output |
* | --- |
* | "This version cannot be restored." |
*
* @param {Editor_History_Error_Invalid_SnapshotInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_error_invalid_snapshot = /** @type {((inputs?: Editor_History_Error_Invalid_SnapshotInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Error_Invalid_SnapshotInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_error_invalid_snapshot(inputs)
	return zh_editor_history_error_invalid_snapshot(inputs)
});