/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Status_UnsavedInputs */

const zh_editor_status_unsaved = /** @type {(inputs: Editor_Status_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未保存`)
};

const en_editor_status_unsaved = /** @type {(inputs: Editor_Status_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsaved`)
};

/**
* | output |
* | --- |
* | "Unsaved" |
*
* @param {Editor_Status_UnsavedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_status_unsaved = /** @type {((inputs?: Editor_Status_UnsavedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Status_UnsavedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_status_unsaved(inputs)
	return zh_editor_status_unsaved(inputs)
});