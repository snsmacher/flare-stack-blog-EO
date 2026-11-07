/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Taxonomy_Sheet_Rename_HintInputs */

const zh_taxonomy_sheet_rename_hint = /** @type {(inputs: Taxonomy_Sheet_Rename_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回车保存，Esc 取消`)
};

const en_taxonomy_sheet_rename_hint = /** @type {(inputs: Taxonomy_Sheet_Rename_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter to save, Esc to cancel`)
};

/**
* | output |
* | --- |
* | "Enter to save, Esc to cancel" |
*
* @param {Taxonomy_Sheet_Rename_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_rename_hint = /** @type {((inputs?: Taxonomy_Sheet_Rename_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Rename_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_rename_hint(inputs)
	return zh_taxonomy_sheet_rename_hint(inputs)
});