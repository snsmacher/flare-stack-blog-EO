/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_ReadonlyInputs */

const zh_editor_history_readonly = /** @type {(inputs: Editor_History_ReadonlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`历史版本 · 只读`)
};

const en_editor_history_readonly = /** @type {(inputs: Editor_History_ReadonlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`History · Read only`)
};

/**
* | output |
* | --- |
* | "History · Read only" |
*
* @param {Editor_History_ReadonlyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_readonly = /** @type {((inputs?: Editor_History_ReadonlyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_ReadonlyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_readonly(inputs)
	return zh_editor_history_readonly(inputs)
});