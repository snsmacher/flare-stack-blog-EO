/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toolbar_UndoInputs */

const zh_editor_toolbar_undo = /** @type {(inputs: Editor_Toolbar_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销`)
};

const en_editor_toolbar_undo = /** @type {(inputs: Editor_Toolbar_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Undo`)
};

/**
* | output |
* | --- |
* | "Undo" |
*
* @param {Editor_Toolbar_UndoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toolbar_undo = /** @type {((inputs?: Editor_Toolbar_UndoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toolbar_UndoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toolbar_undo(inputs)
	return zh_editor_toolbar_undo(inputs)
});