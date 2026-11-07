/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Conflict_Reload_FailedInputs */

const zh_editor_conflict_reload_failed = /** @type {(inputs: Editor_Conflict_Reload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新版本载入失败，请重试。`)
};

const en_editor_conflict_reload_failed = /** @type {(inputs: Editor_Conflict_Reload_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The latest version could not be loaded. Try again.`)
};

/**
* | output |
* | --- |
* | "The latest version could not be loaded. Try again." |
*
* @param {Editor_Conflict_Reload_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_conflict_reload_failed = /** @type {((inputs?: Editor_Conflict_Reload_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Conflict_Reload_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_conflict_reload_failed(inputs)
	return zh_editor_conflict_reload_failed(inputs)
});