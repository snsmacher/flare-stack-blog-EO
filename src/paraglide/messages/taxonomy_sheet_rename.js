/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Taxonomy_Sheet_RenameInputs */

const zh_taxonomy_sheet_rename = /** @type {(inputs: Taxonomy_Sheet_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`改名`)
};

const en_taxonomy_sheet_rename = /** @type {(inputs: Taxonomy_Sheet_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rename`)
};

/**
* | output |
* | --- |
* | "Rename" |
*
* @param {Taxonomy_Sheet_RenameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_rename = /** @type {((inputs?: Taxonomy_Sheet_RenameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_RenameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_rename(inputs)
	return zh_taxonomy_sheet_rename(inputs)
});