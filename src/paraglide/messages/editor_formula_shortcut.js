/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Formula_ShortcutInputs */

const zh_editor_formula_shortcut = /** @type {(inputs: Editor_Formula_ShortcutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ctrl+Enter 应用 · Esc 取消`)
};

const en_editor_formula_shortcut = /** @type {(inputs: Editor_Formula_ShortcutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ctrl+Enter Apply · Esc Cancel`)
};

/**
* | output |
* | --- |
* | "Ctrl+Enter Apply · Esc Cancel" |
*
* @param {Editor_Formula_ShortcutInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_formula_shortcut = /** @type {((inputs?: Editor_Formula_ShortcutInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Formula_ShortcutInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_formula_shortcut(inputs)
	return zh_editor_formula_shortcut(inputs)
});