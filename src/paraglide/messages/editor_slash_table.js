/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Slash_TableInputs */

const zh_editor_slash_table = /** @type {(inputs: Editor_Slash_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表格`)
};

const en_editor_slash_table = /** @type {(inputs: Editor_Slash_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Table`)
};

/**
* | output |
* | --- |
* | "Table" |
*
* @param {Editor_Slash_TableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_slash_table = /** @type {((inputs?: Editor_Slash_TableInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Slash_TableInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_slash_table(inputs)
	return zh_editor_slash_table(inputs)
});