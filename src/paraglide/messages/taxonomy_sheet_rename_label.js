/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Taxonomy_Sheet_Rename_LabelInputs */

const zh_taxonomy_sheet_rename_label = /** @type {(inputs: Taxonomy_Sheet_Rename_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.name}」的新名称`)
};

const en_taxonomy_sheet_rename_label = /** @type {(inputs: Taxonomy_Sheet_Rename_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`New name for “${i?.name}”`)
};

/**
* | output |
* | --- |
* | "New name for “{name}”" |
*
* @param {Taxonomy_Sheet_Rename_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_rename_label = /** @type {((inputs: Taxonomy_Sheet_Rename_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Rename_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_rename_label(inputs)
	return zh_taxonomy_sheet_rename_label(inputs)
});