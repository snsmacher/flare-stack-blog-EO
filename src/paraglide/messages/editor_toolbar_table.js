/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toolbar_TableInputs */

const zh_editor_toolbar_table = /** @type {(inputs: Editor_Toolbar_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`插入表格`)
};

const en_editor_toolbar_table = /** @type {(inputs: Editor_Toolbar_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insert Table`)
};

/**
* | output |
* | --- |
* | "Insert Table" |
*
* @param {Editor_Toolbar_TableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toolbar_table = /** @type {((inputs?: Editor_Toolbar_TableInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toolbar_TableInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toolbar_table(inputs)
	return zh_editor_toolbar_table(inputs)
});