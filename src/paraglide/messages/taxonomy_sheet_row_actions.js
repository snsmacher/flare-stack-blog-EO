/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Taxonomy_Sheet_Row_ActionsInputs */

const zh_taxonomy_sheet_row_actions = /** @type {(inputs: Taxonomy_Sheet_Row_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.name}」的操作`)
};

const en_taxonomy_sheet_row_actions = /** @type {(inputs: Taxonomy_Sheet_Row_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actions for “${i?.name}”`)
};

/**
* | output |
* | --- |
* | "Actions for “{name}”" |
*
* @param {Taxonomy_Sheet_Row_ActionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_row_actions = /** @type {((inputs: Taxonomy_Sheet_Row_ActionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Row_ActionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_row_actions(inputs)
	return zh_taxonomy_sheet_row_actions(inputs)
});